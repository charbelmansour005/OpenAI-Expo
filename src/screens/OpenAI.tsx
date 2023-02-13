import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native"
import { Divider } from "react-native-paper"
import { StatusBar } from "expo-status-bar"
import { useToast } from "react-native-toast-notifications"
import Chat from "../assets/chat.png"
import ShowApiBusy from "../components/Loading"
import InputSubmit from "../components/InputSubmit"
import { CONTANTS } from "../helpers/api"
import Examples from "../components/Examples"

const OpenAI = () => {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState<string | null>(null)
  const [base, setBase] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const toast = useToast()

  const handleBusinessLogic = async () => {
    try {
      let id = toast.show("Loading", {
        placement: "center",
        duration: 3000,
      })
      const token = CONTANTS.myToken
      const payload = {
        prompt: input,
        max_tokens: 1000,
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
      const response = await fetch(CONTANTS.URL, options)
      const json = await response.json()
      setResponse(json.choices[0].text)
      setLoading(false)
      toast.update(id, "Loading successful!", {
        type: "normal",
        placement: "bottom",
        duration: 4000,
      })
    } catch (error: any) {
      setLoading(false)
      console.error(error)
    }
  }

  const handleSubmit = () => {
    setBase(input)
    setLoading(true)
    setResponse("")
    handleBusinessLogic()
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor="#484454" style="light" />
      {loading && ShowApiBusy()}
      {response && !loading ? (
        <ScrollView style={{ marginBottom: 80 }}>
          <Divider />
          <Text selectable style={styles.baseFont}>
            You: {base}
          </Text>
          <Divider />
          <Image source={Chat} style={styles.image} />
          <Text selectable style={styles.response}>
            {base + response}
          </Text>
          <Divider />
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <Pressable
              style={{
                padding: 8,
                backgroundColor: "#28a47c",
                borderRadius: 2,
                marginHorizontal: 20,
              }}
              android_ripple={{ color: "white" }}
              onPress={() => {
                setResponse("")
                setInput("")
              }}
            >
              <Text style={{ color: "white" }}>Clear</Text>
            </Pressable>
            <Pressable
              style={{
                padding: 8,
                backgroundColor: "#28a47c",
                borderRadius: 2,
                marginHorizontal: 20,
              }}
              android_ripple={{ color: "white" }}
              onPress={() => {
                setResponse("")
                setInput(base)
                setBase(input)
                handleSubmit()
              }}
            >
              <Text style={{ color: "white" }}>Regenerate response</Text>
            </Pressable>
          </View>
        </ScrollView>
      ) : null}
      {!response && !loading && <Examples setInput={setInput} />}
      <InputSubmit
        input={input}
        setInput={setInput}
        loading={loading}
        setBase={setBase}
        handleSubmit={handleSubmit}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    padding: 10,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 15,
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#484454",
  },
  button: {
    width: "10%",
    marginVertical: 20,
  },
  response: {
    color: "white",
    marginVertical: 3,
    padding: 15,
  },
  baseFont: {
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

export default OpenAI
