import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
} from "react-native"
import { TextInput } from "react-native-paper"
import GoogleLogo from "../assets/google.png"
import React from "react"

type Props = {}

const SignUp = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "sans-serif-condensed",
          color: "black",
          fontWeight: "bold",
          fontSize: 33,
        }}
      >
        Create your account
      </Text>
      <Text
        style={{
          fontFamily: "sans-serif-condensed",
          color: "black",
          fontSize: 16,
          marginTop: 10,
          textAlign: "center",
          paddingHorizontal: 35,
        }}
      >
        Please note that phone verification is required for signup. Your number
        might be used to verify your identity for security purposes.
      </Text>
      <TextInput
        style={styles.input}
        mode="outlined"
        activeOutlineColor="#28a47c"
        textColor="black"
        placeholderTextColor="silver"
        outlineColor="#28a47c"
        placeholder="Email address"
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        activeOutlineColor="#28a47c"
        textColor="black"
        placeholderTextColor="silver"
        outlineColor="#28a47c"
        placeholder="Password"
        keyboardType="visible-password"
        secureTextEntry
      />
      <Pressable
        android_ripple={{ color: "white" }}
        style={{
          marginTop: 20,
          backgroundColor: "#28a47c",
          paddingVertical: 15,
          paddingHorizontal: Dimensions.get("screen").width * 0.32,
          borderRadius: 3,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Continue</Text>
      </Pressable>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "sans-serif-condensed",
            color: "black",
            fontSize: 16,
            marginTop: 15,
            textAlign: "center",
          }}
        >
          Already have an account?
        </Text>
        <Text
          style={{
            fontFamily: "sans-serif-condensed",
            color: "#28a47c",
            fontSize: 16,
            marginTop: 15,
            textAlign: "center",
            marginLeft: 10,
          }}
        >
          Log in
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{ height: 1, backgroundColor: "silver", width: "30%" }}
        ></View>
        <Text
          style={{ marginHorizontal: 10, fontWeight: "bold", color: "gray" }}
        >
          OR
        </Text>
        <View
          style={{ height: 1, backgroundColor: "silver", width: "30%" }}
        ></View>
      </View>
      <Pressable
        android_ripple={{ color: "white" }}
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          borderWidth: 1.5,
          borderColor: "silver",
          borderRadius: 5,
          paddingVertical: 12,
          width: "82%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={GoogleLogo}
          style={{ height: 26, width: 26, marginLeft: 15 }}
        />
        <Text style={{ fontSize: 16, marginLeft: 15 }}>
          Continue with Google
        </Text>
      </Pressable>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f8",
    width: "100%",
    height: "100%",
  },
  input: {
    width: "82%",
    backgroundColor: "#f7f7f8",
    marginTop: 15,
  },
})
