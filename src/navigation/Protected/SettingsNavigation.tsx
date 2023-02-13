import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../screens/Settings/Settings';

type SettingsStackParams = {
  Settings: undefined;
};

const SettingsStackNavigator = createStackNavigator<SettingsStackParams>();

export const SettingsScreenStack = () => {
  return (
    <SettingsStackNavigator.Navigator>
      <SettingsStackNavigator.Screen
        name="Settings"
        component={Settings}
      />
    </SettingsStackNavigator.Navigator>
  );
};
