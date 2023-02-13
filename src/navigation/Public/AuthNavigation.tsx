import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';

export type AuthStackParams = {
  Login: undefined;
  Signup: undefined;
};

const AuthNavigatorStack = createStackNavigator<AuthStackParams>();

export const AuthScreenStack = () => {
  return (
    <AuthNavigatorStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthNavigatorStack.Screen
        name="Login"
        component={Login}
      />
      <AuthNavigatorStack.Screen
        name="Signup"
        component={SignUp}
      />
    </AuthNavigatorStack.Navigator>
  );
};
