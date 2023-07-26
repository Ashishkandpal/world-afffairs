// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARcR4QTxHEJM71lDMbr3bgRdae3lwIBAk",
  authDomain: "world-affairs-eeab1.firebaseapp.com",
  projectId: "world-affairs-eeab1",
  storageBucket: "world-affairs-eeab1.appspot.com",
  messagingSenderId: "976481765519",
  appId: "1:976481765519:web:c5f67f6a98ece0d8c748fa",
  measurementId: "G-1VMFMS7M6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
