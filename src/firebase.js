import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your configuration and your keys
  apiKey: "AIzaSyDRkJLpp7BpUMbdXkKBOvS2l2eKarEcCBg",
  authDomain: "task-manager-fb028.firebaseapp.com",
  projectId: "task-manager-fb028",
  storageBucket: "task-manager-fb028.appspot.com",
  messagingSenderId: "950208037476",
  appId: "1:950208037476:web:6bc5d256d13e7ec792d571",
  measurementId: "G-LXT9XW79JV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { db, auth, app };