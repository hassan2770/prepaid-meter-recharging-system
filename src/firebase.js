import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC0LR7sQWvIqs22-kd4_gqdFPKA6tA2hWw",
  authDomain: "blog-web-practise.firebaseapp.com",
  projectId: "blog-web-practise",
  storageBucket: "blog-web-practise.appspot.com",
  messagingSenderId: "932959042927",
  appId: "1:932959042927:web:5cb2312d87550de5cc3c9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth =getAuth()

export const db = getFirestore(app)
