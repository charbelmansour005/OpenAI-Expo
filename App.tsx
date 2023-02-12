import { StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import OpenAI from './src/screens/OpenAI';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import React from 'react';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider
          successColor="#28a47c"
          normalColor="#383444"
        >
          {/* <SignUp /> */}
          <Login />
          {/* <OpenAI /> */}
        </ToastProvider>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
