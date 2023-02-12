import axios from 'axios';
import {
  authBody,
  authResponse,
  refreshTokenBody,
} from '../../interfaces/auth/authInterfaces';
import { CONTANTS } from '../api';

export const singInUser = async (credentials: authBody) => {
  const { signInURL } = CONTANTS;
  const response = await axios.post(signInURL, credentials);

  const data: authResponse = response.data;
  return data;
};

export const singUpUser = async (credentials: authBody) => {
  const { signUpURL } = CONTANTS;
  const response = await axios.post(signUpURL, credentials);

  const data: authResponse = response.data;
  return data;
};

export const refreshTokens = async (body: refreshTokenBody) => {
  const { exchangeTokenURL } = CONTANTS;
  const response = await axios.post(exchangeTokenURL, body);

  return response;
};
