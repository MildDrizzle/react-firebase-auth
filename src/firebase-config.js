import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Replace this with your firebase Config

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
