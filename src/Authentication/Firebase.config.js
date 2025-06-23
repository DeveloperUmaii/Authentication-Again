// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_BuHyful1V2QUO0idqzLnf_aEHdr-b0A",
  authDomain: "fire-pushpa.firebaseapp.com",
  projectId: "fire-pushpa",
  storageBucket: "fire-pushpa.firebasestorage.app",
  messagingSenderId: "791498699556",
  appId: "1:791498699556:web:8f331352909ea6f0e7b9b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);