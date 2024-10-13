import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5sc4e_mc0onuxlRZyAgLz19zGL09rxLs",
  authDomain: "animeganz-3e3b8.firebaseapp.com",
  projectId: "animeganz-3e3b8",
  storageBucket: "animeganz-3e3b8.appspot.com",
  messagingSenderId: "778006711257",
  appId: "1:778006711257:web:cf6852d1ea548b5791e7c8",
  measurementId: "G-Q2CPXHWX5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth();
export default app;
