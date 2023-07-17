// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB-OMdRj1Gtc4ZSnbxnySsW3L4Bfgojus",
  authDomain: "clone-feef0.firebaseapp.com",
  projectId: "clone-feef0",
  storageBucket: "clone-feef0.appspot.com",
  messagingSenderId: "4560408019",
  appId: "1:4560408019:web:5cf006b0a860f5f9ea3326",
  measurementId: "G-ETQVVLY50Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);