import { StyleSheet } from "react-native"
import { ToastProvider } from "react-native-toast-notifications"
import React from "react"
import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import AppNavigation from "./src/navigation/AppNavigation"

const queryClient = new QueryClient()

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider successColor="#28a47c" normalColor="#383444">
          <AppNavigation />
        </ToastProvider>
      </QueryClientProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({})
