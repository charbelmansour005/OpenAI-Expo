import { createStackNavigator } from '@react-navigation/stack';
import OpenAI from '../../screens/OpenAI';

export type OpenAINavigationParams = {
  OpenAI: undefined;
};

const OpenAINavigatorStack = createStackNavigator<OpenAINavigationParams>();

export const OpenAIScreenStack = () => {
  return (
    <OpenAINavigatorStack.Navigator screenOptions={{ headerShown: false }}>
      <OpenAINavigatorStack.Screen
        name="OpenAI"
        component={OpenAI}
      />
    </OpenAINavigatorStack.Navigator>
  );
};
