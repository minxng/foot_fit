import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN_KEY,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
}
