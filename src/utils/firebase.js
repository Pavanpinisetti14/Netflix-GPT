// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9EcoxGypV9CcxuD_geLB6K28Pfp3TLPk",
  authDomain: "netflix-gpt-60929.firebaseapp.com",
  projectId: "netflix-gpt-60929",
  storageBucket: "netflix-gpt-60929.appspot.com",
  messagingSenderId: "1090830453842",
  appId: "1:1090830453842:web:2be0e5e9120e14b90f638b",
  measurementId: "G-VWKSEGC1YC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
