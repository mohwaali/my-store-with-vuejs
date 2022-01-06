// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgQekIpb6VprC36AoNHU5KenysUsGL60U",
  authDomain: "aladdin-906fa.firebaseapp.com",
  projectId: "aladdin-906fa",
  storageBucket: "aladdin-906fa.appspot.com",
  messagingSenderId: "600935047342",
  appId: "1:600935047342:web:8ce530eb630fb41b074d3f",
  measurementId: "G-X36Q03W9EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);