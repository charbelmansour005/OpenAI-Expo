import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { IconButton, TextInput } from "react-native-paper"

type Props = {
  input: string
  setInput: (args?: any) => void
  loading: boolean
  setBase: (args?: any) => void
  handleSubmit: (args?: any) => void
}

const InputSubmit = ({ ...props }: Props) => {
  return (
    // below view gives us the chat look
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#383444",
      }}
    >
      <TextInput
        style={styles.input}
        value={props.input}
        onChangeText={(text) => props.setInput(text)}
        mode="outlined"
        activeOutlineColor="silver"
        textColor="white"
        placeholderTextColor="silver"
        outlineColor="gray"
        disabled={props.loading}
      />
      <IconButton
        icon={props.loading ? "close-circle" : "send"}
        iconColor="white"
        containerColor="#28a47c"
        size={24}
        onPress={() => {
          props.setBase(props.input)
          props.handleSubmit()
        }}
        mode="contained"
        style={{ marginTop: 10, marginRight: 3 }}
        disabled={props.loading || !props.input}
      />
    </View>
  )
}

export default InputSubmit

const styles = StyleSheet.create({
  input: {
    width: "85%",
    marginBottom: 5,
    marginLeft: 5,
    backgroundColor: "#484454",
  },
})
