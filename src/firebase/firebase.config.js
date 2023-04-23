// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD65pYBiRTAMxYoi3U1QJSDsB144hRG1k4",
    authDomain: "ema-john-with-firebase-a-87d97.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-87d97",
    storageBucket: "ema-john-with-firebase-a-87d97.appspot.com",
    messagingSenderId: "623586375305",
    appId: "1:623586375305:web:c74077c58a4c940e98b858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;