import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN_KEY,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  databaseURL: "https://shop-login-db116-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getDatabase();
export async function login() {
  return signInWithPopup(auth, provider).then(async (resp) => {
    const starCountRef = ref(db, "admins");
    const snapshot = await get(starCountRef);
    const master_id = snapshot.val();
    const isAdmin = master_id === resp.user.uid;
    return isAdmin;
  });
}

export async function logout() {
  signOut(auth).catch((error) => console.log(error));
}

export async function checkAuthState(callback) {
  onAuthStateChanged(auth, callback);
}
