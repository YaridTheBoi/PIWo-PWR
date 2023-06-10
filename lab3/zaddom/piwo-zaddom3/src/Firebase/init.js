// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDalzCTtGRRJgW2cGe-lKQQGvdXo9uPJvg",
  authDomain: "piwo-zaddom259120.firebaseapp.com",
  projectId: "piwo-zaddom259120",
  storageBucket: "piwo-zaddom259120.appspot.com",
  messagingSenderId: "327889645387",
  appId: "1:327889645387:web:5e728394a80edb9b5482ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);