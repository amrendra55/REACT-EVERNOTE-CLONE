import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASecOtuWpRZplKT-SFLS1fm0f5O5wCEjk",
  authDomain: "evernote-app-2db30.firebaseapp.com",
  projectId: "evernote-app-2db30",
  storageBucket: "evernote-app-2db30.appspot.com",
  messagingSenderId: "218278523638",
  appId: "1:218278523638:web:8204a9d7acc93c9db672d7"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);