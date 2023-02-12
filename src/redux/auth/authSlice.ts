import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authResponse } from '../../interfaces/auth/authInterfaces';

interface AuthSliceStates {
  access_token: string | null;
  refresh_token: string | null;
  email: string | null;
}

const initialState: AuthSliceStates = {
  access_token: null,
  refresh_token: null,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    defaultAuth: (state) => {
      state.access_token = initialState.access_token;
      state.refresh_token = initialState.refresh_token;
      state.email = initialState.email;
    },
    setUser: (state, action: PayloadAction<authResponse>) => {
      state.access_token = action.payload.idToken;
      state.refresh_token = action.payload.refreshToken;
      state.email = action.payload.email;
    },
  },
});

export const { defaultAuth, setUser } = authSlice.actions;

export default authSlice.reducer;
