import { StyleSheet, Text, View, Pressable } from "react-native"
import { TextInput } from "react-native-paper"
import React from "react"

type Props = {}

const SignUp = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#484454",
  },
})
