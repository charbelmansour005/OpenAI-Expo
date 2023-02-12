import { StyleSheet } from "react-native"
import { ToastProvider } from "react-native-toast-notifications"
import OpenAI from "./src/screens/OpenAI"
import SignUp from "./src/screens/SignUp"
import Login from "./src/screens/Login"
import React from "react"

export default function App() {
  return (
    <React.Fragment>
      <ToastProvider successColor="#28a47c" normalColor="#383444">
        <SignUp />
        {/* <Login /> */}
        {/* <OpenAI /> */}
      </ToastProvider>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({})
