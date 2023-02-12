import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import GoogleLogo from '../assets/google.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { singInUser } from '../helpers/auth/authHelpers';
import {
  authBody,
  authErrorResponse,
  authResponse,
} from '../interfaces/auth/authInterfaces';
import { CONTANTS } from '../helpers/api';
import { signInValidations } from '../validations/auth/authValidations';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser } from '../redux/auth/authSlice';

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const { access_token, email, refresh_token } = useAppSelector(
    (state) => state.auth
  );

  const { returnSecureToken } = CONTANTS;

  const { isError, error, isLoading, mutate } = useMutation({
    mutationFn: (args: authBody) => singInUser({ ...args }),
    onSuccess: (response) => {
      dispatch(
        setUser({
          email: response.email,
          idToken: response.idToken,
          refreshToken: response.refreshToken,
        })
      );
    },
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnMount={true}
      validationSchema={signInValidations}
      onSubmit={(values) =>
        mutate({
          email: values.email,
          password: values.password,
          returnSecureToken,
        })
      }
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        isValid,
        values,
        touched,
      }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <StatusBar
              backgroundColor="#f7f7f8"
              style="dark"
            />
            {isError && (
              <Text style={{ textAlign: 'center', color: 'tomato' }}>
                {(error as authErrorResponse)?.response?.data?.error?.message}
              </Text>
            )}
            <Text style={styles.headerText}>Welcome back</Text>
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
            {errors.email && (
              <Text style={{ color: 'tomato' }}>{errors.email}</Text>
            )}
            <TextInput
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={!!errors.password && touched.password}
              style={styles.input}
              mode="outlined"
              activeOutlineColor="#28a47c"
              textColor="black"
              placeholderTextColor="silver"
              outlineColor="#28a47c"
              placeholder="Password"
              secureTextEntry
            />
            {errors.password && (
              <Text style={{ color: 'tomato' }}>{errors.password}</Text>
            )}
            <Pressable
              android_ripple={{ color: 'white' }}
              style={{
                marginTop: 20,
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
                Don't have an account?
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
              >
                Sign up
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
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'sans-serif-condensed',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 33,
  },
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
    marginTop: 15,
  },
});
