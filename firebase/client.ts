// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8de-vi-cHVy9ra3L86iFIvYIBtRYKuXA",
  authDomain: "ai-interview-prep-946f7.firebaseapp.com",
  projectId: "ai-interview-prep-946f7",
  storageBucket: "ai-interview-prep-946f7.firebasestorage.app",
  messagingSenderId: "951183521311",
  appId: "1:951183521311:web:bd708c621fd3a95fe4c72a",
  measurementId: "G-WPSEDL4YNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);