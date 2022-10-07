import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your configuration and your keys

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { db, auth, app };