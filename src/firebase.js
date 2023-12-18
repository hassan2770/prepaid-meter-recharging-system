import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDCD93W5ZlAEOfkfS_kyODJL32rtoF9FHw",
  authDomain: "fyp-app-17c3c.firebaseapp.com",
  projectId: "fyp-app-17c3c",
  storageBucket: "fyp-app-17c3c.appspot.com",
  messagingSenderId: "894787498425",
  appId: "1:894787498425:web:96a94ded3c9b215450c668"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth =getAuth()

export const db = getFirestore(app)
