import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    // Your configuration and your keys
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGID,
    appId: process.env.REACT_APP_APPID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()
const timestamp = serverTimestamp();

export { db, auth, app, timestamp}
