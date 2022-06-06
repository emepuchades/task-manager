import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-storage"

const firebaseConfig = {
  apiKey: "AIzaSyD2kCciqYr2tJj2kO0mYA6WXX9Pmsqd-Tk",
  authDomain: "projectsgithub.firebaseapp.com",
  projectId: "projectsgithub",
  storageBucket: "projectsgithub.appspot.com",
  messagingSenderId: "96527924662",
  appId: "1:96527924662:web:763ff9c08b389c08a49517"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const store = firebase.storage();

export default { db, auth, store }

