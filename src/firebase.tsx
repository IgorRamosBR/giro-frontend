// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "giro-f8bea.firebaseapp.com",
  projectId: "giro-f8bea",
  storageBucket: "giro-f8bea.firebasestorage.app",
  messagingSenderId: "95283629123",
  appId: "1:95283629123:web:47edaf9ce92a53da5498f6",
  measurementId: "G-F0PS15PJ30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//const analytics = getAnalytics(app);
export { auth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged };
