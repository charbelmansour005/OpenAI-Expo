import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { OpenAIScreenStack } from "../Protected/OpenAINavigation"
import { SettingsScreenStack } from "../Protected/SettingsNavigation"
import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"

export type BottomStackParams = {
  Chat: undefined
  Settings: undefined
}

const BottomStackNavigator = createBottomTabNavigator<BottomStackParams>()

export const BottomRootStack = () => {
  return (
    <BottomStackNavigator.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "#383444",
        tabBarActiveBackgroundColor: "#383444",
        tabBarActiveTintColor: "#28a47c",
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <BottomStackNavigator.Screen
        name="Chat"
        component={OpenAIScreenStack}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color={tabInfo.focused ? "#28a47c" : "#484454"}
              />
            )
          },
        }}
      />
      <BottomStackNavigator.Screen
        name="Settings"
        component={SettingsScreenStack}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-settings"
                size={24}
                color={tabInfo.focused ? "#28a47c" : "#484454"}
              />
            )
          },
        }}
      />
    </BottomStackNavigator.Navigator>
  )
}
