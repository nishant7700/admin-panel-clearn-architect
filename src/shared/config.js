import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKKSryx7uQ6L1dW9gzoiYm2z1h-2flRQU",
  authDomain: "nationalngo-9f4cd.firebaseapp.com",
  projectId: "nationalngo-9f4cd",
  storageBucket: "nationalngo-9f4cd.appspot.com",
  messagingSenderId: "235486338901",
  appId: "1:235486338901:web:7d31efc0828a860c85d9dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
