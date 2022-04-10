import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBUmJV95T9_6Hz7YMKyk0OZlIicyI2F_I",
  authDomain: "nkwo-crud-app.firebaseapp.com",
  projectId: "nkwo-crud-app",
  storageBucket: "nkwo-crud-app.appspot.com",
  messagingSenderId: "31878026934",
  appId: "1:31878026934:web:c3736a5cb5cb7df6fa7817",
  measurementId: "G-YZT76E0VHY",
};

const app = initializeApp(firebaseConfig);

//this connect the app to the database
export const db = getFirestore(app);
