import * as yup from 'yup';

export const signInValidations = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const signUpValidations = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      'Password must contain 8 or more characters, with 1 upper case, 1 lower case and a special character'
    )
    .required('Password must not be emtpy'),
});
