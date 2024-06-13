// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_5-tXZ4Fnkcqcly-y0om2ohHhIeV6Hw",
  authDomain: "auth-project-13f25.firebaseapp.com",
  projectId: "auth-project-13f25",
  storageBucket: "auth-project-13f25.appspot.com",
  messagingSenderId: "120754608530",
  appId: "1:120754608530:web:2c209dddb6787f04bf494b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);