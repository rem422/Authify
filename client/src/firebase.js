// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authify-e2449.firebaseapp.com",
  projectId: "authify-e2449",
  storageBucket: "authify-e2449.firebasestorage.app",
  messagingSenderId: "461717698257",
  appId: "1:461717698257:web:36167b24b65aebf347b7f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);