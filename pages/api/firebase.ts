// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJzqYbYqLc-4IRzvtkBvMsXt_3FzcVzG8",
  authDomain: "next-auth-username-passw-257f0.firebaseapp.com",
  projectId: "next-auth-username-passw-257f0",
  storageBucket: "next-auth-username-passw-257f0.appspot.com",
  messagingSenderId: "498194203447",
  appId: "1:498194203447:web:87ad9573c4d35f245750b2",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
