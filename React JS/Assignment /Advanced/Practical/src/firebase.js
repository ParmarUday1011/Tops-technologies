import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF51zAtFKdgEuMEKHV1ZmXKY6t0T4Q28U",
  authDomain: "assignment-6d4a2.firebaseapp.com",
  projectId: "assignment-6d4a2",
  storageBucket: "assignment-6d4a2.firebasestorage.app",
  messagingSenderId: "617383082912",
  appId: "1:617383082912:web:6b85370730a12655d102c5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
