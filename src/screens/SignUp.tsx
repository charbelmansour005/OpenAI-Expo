import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import GoogleLogo from '../assets/google.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { useMutation } from '@tanstack/react-query/build/lib/useMutation';
import { singUpUser } from '../helpers/auth/authHelpers';
import { authBody, authErrorResponse } from '../interfaces/auth/authInterfaces';
import { setUser } from '../redux/auth/authSlice';
import { Formik } from 'formik';
import { CONTANTS } from '../helpers/api';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { AuthStackParams } from '../navigation/Public/AuthNavigation';

type Props = StackScreenProps<AuthStackParams, 'Signup'>;

const SignUp = ({ navigation }: Props) => {
  const { replace } = navigation;
  const dispatch = useAppDispatch();

  const { returnSecureToken } = CONTANTS;

  const { isError, error, isLoading, mutate } = useMutation({
    mutationFn: (args: authBody) => singUpUser({ ...args }),
    onSuccess: (response) =>
      dispatch(
        setUser({
          email: response.email,
          idToken: response.idToken,
          refreshToken: response.refreshToken,
        })
      ),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) =>
        mutate({
          email: values.email,
          password: values.password,
          returnSecureToken,
        })
      }
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        isValid,
        touched,
      }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <SafeAreaView style={styles.container}>
            <StatusBar
              backgroundColor="#f7f7f8"
              style="dark"
            />
            {isError && (
              <Text style={{ color: 'tomato' }}>
                {(error as authErrorResponse).response.data.error.message}
              </Text>
            )}
            <Text
              style={{
                fontFamily: 'sans-serif-condensed',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 33,
              }}
            >
              Create your account
            </Text>
            <Text
              style={{
                fontFamily: 'sans-serif-condensed',
                color: 'black',
                fontSize: 16,
                marginTop: 10,
                textAlign: 'center',
                paddingHorizontal: 35,
              }}
            >
              Please note that phone verification is required for signup. Your
              number might be used to verify your identity for security
              purposes.
            </Text>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#28a47c"
              textColor="black"
              placeholderTextColor="silver"
              outlineColor="#28a47c"
              placeholder="Email address"
              error={!!errors.email && touched.email}
            />
            {errors.email && touched.email && (
              <Text style={{ color: 'tomato' }}>{errors.email}</Text>
            )}
            <TextInput
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#28a47c"
              textColor="black"
              placeholderTextColor="silver"
              outlineColor="#28a47c"
              placeholder="Password"
              keyboardType="visible-password"
              secureTextEntry={true}
              error={!!errors.password && touched.password}
            />
            {errors.password && touched.password && (
              <Text style={{ color: 'tomato' }}>{errors.email}</Text>
            )}
            <View
              style={{
                width: '82%',
                borderWidth: 1.5,
                borderColor: 'silver',
                marginTop: 15,
                padding: 15,
                borderRadius: 4,
              }}
            >
              <Text style={{ fontSize: 15 }}>Your password must contain:</Text>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 6,
                  color: values.password.length < 8 ? 'tomato' : 'green',
                }}
              >
                {/* <Text style={{ fontSize: 15, marginTop: 6, color: "#28a47c" }}> */}
                {values.password.length < 8
                  ? '* At least 8 characters long'
                  : '✔︎ At least 8 characters'}
                {/* ✔︎ At least 8 characters */}
              </Text>
            </View>
            <Pressable
              android_ripple={{ color: 'white' }}
              style={{
                marginTop: 15,
                backgroundColor: '#28a47c',
                paddingVertical: 15,
                paddingHorizontal: Dimensions.get('screen').width * 0.32,
                borderRadius: 3,
              }}
              disabled={!isValid || isLoading}
              onPress={() => handleSubmit()}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
            </Pressable>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text
                style={{
                  fontFamily: 'sans-serif-condensed',
                  color: 'black',
                  fontSize: 16,
                  marginTop: 15,
                  textAlign: 'center',
                }}
              >
                Already have an account?
              </Text>
              <Text
                style={{
                  fontFamily: 'sans-serif-condensed',
                  color: '#28a47c',
                  fontSize: 16,
                  marginTop: 15,
                  textAlign: 'center',
                  marginLeft: 10,
                }}
                onPress={() => replace('Login')}
              >
                Log in
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
              }}
            >
              <View
                style={{ height: 1, backgroundColor: 'silver', width: '30%' }}
              ></View>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                  color: 'gray',
                }}
              >
                OR
              </Text>
              <View
                style={{ height: 1, backgroundColor: 'silver', width: '30%' }}
              ></View>
            </View>
            <Pressable
              android_ripple={{ color: 'white' }}
              style={{
                marginTop: 30,
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1.5,
                borderColor: 'silver',
                borderRadius: 5,
                paddingVertical: 12,
                width: '82%',
                justifyContent: 'flex-start',
                alignItems: 'center',
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
          </SafeAreaView>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f8',
    width: '100%',
    height: '100%',
  },
  input: {
    width: '82%',
    backgroundColor: '#f7f7f8',
    marginTop: 10,
  },
});
