// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYIOn8cy4YtzJibCQJusq4kLYjyRiRIb0",
  authDomain: "panoramacity-coder73690.firebaseapp.com",
  projectId: "panoramacity-coder73690",
  storageBucket: "panoramacity-coder73690.firebasestorage.app",
  messagingSenderId: "1024743138081",
  appId: "1:1024743138081:web:c1948ef5f708fd05555460",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
