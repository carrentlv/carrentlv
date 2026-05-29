// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdGjI3Cqw_lw8O8KPMK1CpOiFfVslkAo4",
  authDomain: "carrentlv-c03b7.firebaseapp.com",
  projectId: "carrentlv-c03b7",
  storageBucket: "carrentlv-c03b7.firebasestorage.app",
  messagingSenderId: "348473215612",
  appId: "1:348473215612:web:03e9addf7d9987941717f9",
  measurementId: "G-NFXPXRQEM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
