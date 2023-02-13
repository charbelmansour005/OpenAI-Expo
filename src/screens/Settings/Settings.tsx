import { View, Text, Pressable } from "react-native"
import React from "react"
import { Button } from "react-native-paper"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { defaultAuth } from "../../redux/auth/authSlice"
import { clearKeychain } from "../../helpers/keychain/keychainHelpers"

const Settings = () => {
  const { email } = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch()
  const handleLogout = async () => {
    dispatch(defaultAuth())
    await clearKeychain()
  }

  // Zedet hay bas kermel l logout bshila eza ma2ela 3aze later
  // Zabbeta however u like

  return (
    <View style={{ flex: 1, backgroundColor: "#484454" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "82%",
            borderWidth: 1.5,
            borderColor: "silver",
            marginTop: 15,
            padding: 15,
            borderRadius: 4,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>Signed in as</Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 6,
              color: "white",
            }}
          >
            {/* <Text style={{ fontSize: 15, marginTop: 6, color: "#28a47c" }}> */}
            {email}
            {/* ✔︎ At least 8 characters */}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          android_ripple={{ color: "white" }}
          style={{
            marginTop: 20,
            backgroundColor: "#28a47c",
            paddingVertical: 10,
            width: "82%",
            borderRadius: 3,
          }}
          onPress={handleLogout}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Logout
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Settings
