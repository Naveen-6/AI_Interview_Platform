// Import only what you need from Firebase
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
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
const app =!getApps.length? initializeApp(firebaseConfig):getApp();



export const auth=getAuth(app);
export const db=getFirestore(app);
