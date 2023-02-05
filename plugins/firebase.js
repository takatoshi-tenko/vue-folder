import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu2YCzfbZKfZHH44mLxjyLw_TmhaYvvKc",
  authDomain: "fight-app-f2fcb.firebaseapp.com",
  projectId: "fight-app-f2fcb",
  storageBucket: "fight-app-f2fcb.appspot.com",
  messagingSenderId: "243159340568",
  appId: "1:243159340568:web:c8872d13e8e4b9ee2e556d",
  measurementId: "G-M127NPBND9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase
