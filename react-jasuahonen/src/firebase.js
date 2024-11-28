// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCWmNK6JJcODb16azLs-CnXxwKo4Uldt2c",
  authDomain: "react-portfolio-dashboar-e5252.firebaseapp.com",
  projectId: "react-portfolio-dashboar-e5252",
  storageBucket: "react-portfolio-dashboar-e5252.firebasestorage.app",
  messagingSenderId: "111132245698",
  appId: "1:111132245698:web:f7d529b38c4f26c87e455b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);