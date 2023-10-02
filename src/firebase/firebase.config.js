// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhVtNd5ME-UbkfWekdZr_xPUx9ofooYqA",
  authDomain: "dragon-news-225e8.firebaseapp.com",
  projectId: "dragon-news-225e8",
  storageBucket: "dragon-news-225e8.appspot.com",
  messagingSenderId: "1041780693222",
  appId: "1:1041780693222:web:e0292c2804d93d816d4327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;