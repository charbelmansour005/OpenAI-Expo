import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '../redux/hooks';
import { BottomRootStack } from './BottomNavigation/BottomNavigation';
import { AuthScreenStack } from './Public/AuthNavigation';

export type RootStackParams = {
  AuthStack: undefined;
  BottomRootStack: undefined;
};

const RootStack = createStackNavigator<RootStackParams>();

function AppNavigation() {
  const isAuth = useAppSelector((state) => !!state.auth.access_token);

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
