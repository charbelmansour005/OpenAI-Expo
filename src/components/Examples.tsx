import { Pressable, StyleSheet, Text } from "react-native"
import React from "react"
import { Card } from "react-native-paper"
import { Suggestions } from "../helpers/suggestions"

type Props = {
  setInput: (args?: any) => void
}

const Examples = ({ ...props }: Props) => {
  return (
    <>
      <Text
        style={{
          textAlign: "center",
          ...styles.response,
        }}
      >
        Examples
      </Text>
      <Card mode="elevated" style={styles.card}>
        <Pressable
          style={styles.pressable}
          android_ripple={{ color: "white" }}
          onPress={() => props.setInput(Suggestions.One)}
        >
          <Text style={styles.example}>{Suggestions.One}</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          android_ripple={{ color: "white" }}
          onPress={() => props.setInput(Suggestions.Two)}
        >
          <Text style={styles.example}>{Suggestions.Two}</Text>
        </Pressable>
      </Card>
    </>
  )
}

export default Examples

const styles = StyleSheet.create({
  pressable: {
    padding: 5,
    backgroundColor: "#484454",
    marginVertical: 10,
    borderRadius: 2,
  },
  card: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: "#383444",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  response: {
    color: "white",
    marginVertical: 3,
    padding: 15,
  },
  example: {
    color: "white",
    padding: 2,
    textAlign: "center",
  },
})
