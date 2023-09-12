// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7VYFsqpKu3wBgfjhwRREdd9mCXSLpOOw",
  authDomain: "clone-a15b3.firebaseapp.com",
  projectId: "clone-a15b3",
  storageBucket: "clone-a15b3.appspot.com",
  messagingSenderId: "290812713484",
  appId: "1:290812713484:web:f00e7a3747222b07fb2c29",
  measurementId: "G-J2QS2L7XPS"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);