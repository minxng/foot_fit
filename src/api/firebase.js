import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";

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
  signInWithPopup(auth, provider).catch((error) => console.log(error));
}

export async function logout() {
  signOut(auth).catch((error) => console.log(error));
}

export async function checkAuthState(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updated_user = user ? await checkAdminUser(user) : null;
    callback(updated_user);
  });
}

async function checkAdminUser(user) {
  return get(ref(db, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

export async function addProduct(product) {
  const id = Date.now();
  const { title, price, category, description, options, img } = product;
  return set(ref(db, "products/" + id), {
    id,
    title,
    price: parseInt(price),
    category,
    description,
    options: options.split(","),
    img,
  });
}

export function getProducts() {
  return get(ref(db, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function addCart(userId, product) {
  return set(ref(db, `carts/${userId}/${product.id}`), product);
}

export async function getCarts(id) {
  return get(ref(db, "carts")).then((snapshot) => {
    if (snapshot.val() && id) {
      const data = snapshot.val();
      return data[id] ? Object.values(data[id]) : [];
    }
    return [];
  });
}

export async function deleteCart(userId, product) {
  console.log(userId, product);
  return remove(ref(db, `carts/${userId}/${product.id}`));
}
