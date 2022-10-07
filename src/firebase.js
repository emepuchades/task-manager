import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your configuration and your keys
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGID,
  appId: process.env.APPID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { db, auth, app };