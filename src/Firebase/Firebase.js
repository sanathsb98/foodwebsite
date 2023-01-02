// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5j2P6B-L4y1Sf1GPXNhb3lEZ3HQsNbRI",
  authDomain: "challenge-41412.firebaseapp.com",
  projectId: "challenge-41412",
  storageBucket: "challenge-41412.appspot.com",
  messagingSenderId: "19440286074",
  appId: "1:19440286074:web:a7a21f7ac521365938fec3",
  measurementId: "G-Z3CSNBD26M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)