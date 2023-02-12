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
