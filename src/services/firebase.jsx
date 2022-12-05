import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBTP77_cpRf3pI8lYzz7lpZjql1zWNBv2M",
  authDomain: "reactjs-coderhouse-f19b9.firebaseapp.com",
  projectId: "reactjs-coderhouse-f19b9",
  storageBucket: "reactjs-coderhouse-f19b9.appspot.com",
  messagingSenderId: "87632905554",
  appId: "1:87632905554:web:213fe259553a9ce070668b",
  measurementId: "G-CRELBMK14D"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);