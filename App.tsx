import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { ToastProvider } from "react-native-toast-notifications"
import OpenAI from "./src/screens/OpenAI"
import React from "react"

export default function App() {
  return (
    <React.Fragment>
      <ToastProvider successColor="#28a47c" normalColor="#383444">
        <OpenAI />
        {/* <StatusBar style="auto" /> */}
      </ToastProvider>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({})
