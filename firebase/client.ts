// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjNhO57cnXFZhHyllGWVE4xDl8JtsTirc",
  authDomain: "daremock-c27d3.firebaseapp.com",
  projectId: "daremock-c27d3",
  storageBucket: "daremock-c27d3.firebasestorage.app",
  messagingSenderId: "756704164383",
  appId: "1:756704164383:web:2095f2d485bc5dafeeb32a",
  measurementId: "G-7470BBJEXF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);