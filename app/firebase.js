// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0K0KCIJjT16uJ9P7odFCyEnBInxl-d8w",
  authDomain: "expense-tracker-740e2.firebaseapp.com",
  projectId: "expense-tracker-740e2",
  storageBucket: "expense-tracker-740e2.appspot.com",
  messagingSenderId: "615342080315",
  appId: "1:615342080315:web:2179bf6176dd354b49f71e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);