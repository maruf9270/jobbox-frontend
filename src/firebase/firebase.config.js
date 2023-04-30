// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2eqztvEvGEFY-aoIPuobDLqhIrh_xMs8",
  authDomain: "job-box-f6621.firebaseapp.com",
  projectId: "job-box-f6621",
  storageBucket: "job-box-f6621.appspot.com",
  messagingSenderId: "440197940755",
  appId: "1:440197940755:web:ed19debbd75dc29a28e1e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;