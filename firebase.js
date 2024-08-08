// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCirbDPS5hkwisRY_BDZUem0KOdHril2bk",
  authDomain: "inventory-management-7678a.firebaseapp.com",
  projectId: "inventory-management-7678a",
  storageBucket: "inventory-management-7678a.appspot.com",
  messagingSenderId: "1063249028663",
  appId: "1:1063249028663:web:67db808610715d6d02c1b2",
  measurementId: "G-WELHMTG4M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}