// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALmyMXMETdEiLIRgmtTavEj1DrzDhp_o4",
  authDomain: "netflixgpt-b88c0.firebaseapp.com",
  projectId: "netflixgpt-b88c0",
  storageBucket: "netflixgpt-b88c0.appspot.com",
  messagingSenderId: "264166544539",
  appId: "1:264166544539:web:c0ae6457777d98e8b7223e",
  measurementId: "G-3BXJ6KQLG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);