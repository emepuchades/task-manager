import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your configuration and your keys
  apiKey: "AIzaSyD2kCciqYr2tJj2kO0mYA6WXX9Pmsqd-Tk",
  authDomain: "projectsgithub.firebaseapp.com",
  projectId: "projectsgithub",
  storageBucket: "projectsgithub.appspot.com",
  messagingSenderId: "96527924662",
  appId: "1:96527924662:web:763ff9c08b389c08a49517"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { db, auth, app };