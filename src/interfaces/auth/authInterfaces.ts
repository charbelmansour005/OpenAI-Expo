export interface authResponse {
  idToken: string;
  refreshToken: string;
  email: string;
}

export interface authBody {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface refreshTokenBody {
  grant_type: string;
  refresh_token: string;
}

export interface authErrorResponse extends Error {
  response: { data: { error: { message: string } } };
}
