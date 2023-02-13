import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OpenAIScreenStack } from '../Protected/OpenAINavigation';
import { SettingsScreenStack } from '../Protected/SettingsNavigation';

export type BottomStackParams = {
  OpenAIStack: undefined;
  SettingsStack: undefined;
};

const BottomStackNavigator = createBottomTabNavigator<BottomStackParams>();

export const BottomRootStack = () => {
  return (
    <BottomStackNavigator.Navigator
      initialRouteName="OpenAIStack"
      screenOptions={{ headerShown: false }}
    >
      <BottomStackNavigator.Screen
        name="OpenAIStack"
        component={OpenAIScreenStack}
      />
      <BottomStackNavigator.Screen
        name="SettingsStack"
        component={SettingsScreenStack}
      />
    </BottomStackNavigator.Navigator>
  );
};
