import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIubI00L2XDe3DLkSYB5T_lYVhx4yheRw",
  authDomain: "savethequest-abd3e.firebaseapp.com",
  projectId: "savethequest-abd3e",
  storageBucket: "savethequest-abd3e.appspot.com",
  messagingSenderId: "1043986190499",
  appId: "1:1043986190499:web:6b55826f490ac740926f16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
