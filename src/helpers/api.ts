type Constants = {
  myToken: string;
  URL: string;
  exchangeTokenURL: string;
  signUpURL: string;
  signInURL: string;
  returnSecureToken: boolean;
};

const firebaseAPIKey = 'AIzaSyCdO4EhlwTBUqEUR1KtsnxTX_B9BsR2X0o';
const grant_type = 'refresh_token';

export const CONTANTS: Constants = {
  myToken: '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',
  URL: 'https://api.openai.com/v1/engines/davinci/completions',
  exchangeTokenURL: `https://securetoken.googleapis.com/v1/token?key=${firebaseAPIKey}`,
  signUpURL: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseAPIKey}`,
  signInURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseAPIKey}`,
  returnSecureToken: true,
};

// qNhg85gzTyEZYE6651q0T3BlbkFJJ3ViQ6rQ4YBotNrJ7EGM
// 0FPijJ6lsV2BANZJRiQ6T3BlbkFJghVbr5hhNlfmFb1Q7FvT
