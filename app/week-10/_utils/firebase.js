// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOdSisY1ueZ8VTbEz2C5aIgkys3IyzNHA",
  authDomain: "cprg306-assignments-4595c.firebaseapp.com",
  projectId: "cprg306-assignments-4595c",
  storageBucket: "cprg306-assignments-4595c.appspot.com",
  messagingSenderId: "656810520778",
  appId: "1:656810520778:web:05208ff87bbce00c6b4433",
  measurementId: "G-CVGGZDJ6YN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
