import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { UserCredentials } from 'react-native-keychain';
import { grant_type } from '../helpers/api';
import { refreshTokens } from '../helpers/auth/authHelpers';
import {
  fetchKeychain,
  setKeychainTokens,
} from '../helpers/keychain/keychainHelpers';
import {
  authResponse,
  refreshTokenBody,
} from '../interfaces/auth/authInterfaces';
import { setUser } from '../redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { BottomRootStack } from './BottomNavigation/BottomNavigation';
import { AuthScreenStack } from './Public/AuthNavigation';

export type RootStackParams = {
  AuthStack: undefined;
  BottomRootStack: undefined;
};

const RootStack = createStackNavigator<RootStackParams>();

function AppNavigation() {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((state) => !!state.auth.access_token);

  const { data, mutate, isSuccess } = useMutation({
    mutationFn: (args: refreshTokenBody) => refreshTokens({ ...args }),
  });

  // this is working i tested it on another app with rn cli
  // but for some reason expo is resetting keychain when i close the app
  // idk how we should test it on expo but whatever this works i guess

  const handleStoreData = async (loginData: authResponse) => {
    await setKeychainTokens(loginData.idToken!, loginData.refreshToken);
    dispatch(setUser({ ...loginData! }));
  };

  const checkAndRefreshAccessToken = async () => {
    const refresh_token = await fetchKeychain();

    if ((refresh_token as UserCredentials).password) {
      return mutate({
        refresh_token: (refresh_token as UserCredentials).password,
        grant_type,
      });
    }
  };

  const handleStoreDataIfSuccess = async () => {
    const tokens = await fetchKeychain();
    if ((tokens as UserCredentials).password && data?.refreshToken) {
      return handleStoreData({
        email: data.email,
        idToken: data.idToken,
        refreshToken: data.refreshToken,
      });
    }
  };

  useEffect(() => {
    checkAndRefreshAccessToken();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      handleStoreDataIfSuccess();
    }
  }, [isSuccess]);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <RootStack.Screen
            name="BottomRootStack"
            component={BottomRootStack}
          />
        ) : (
          <RootStack.Screen
            name="AuthStack"
            component={AuthScreenStack}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
