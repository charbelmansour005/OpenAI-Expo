import axios from 'axios';
import { authBody } from '../../interfaces/auth/authInterfaces';
import { CONTANTS } from '../api';

export const singInUser = async (credentials: authBody) => {
  const { signInURL } = CONTANTS;
  const response = axios.post(signInURL, credentials);

  return response;
};
