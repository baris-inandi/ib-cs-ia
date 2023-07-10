// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6Zxu6as7ZX_hXLmMnpaYo9RMXJbKKkTw",
    authDomain: "cs-ia-test.firebaseapp.com",
    projectId: "cs-ia-test",
    storageBucket: "cs-ia-test.appspot.com",
    messagingSenderId: "265869184140",
    appId: "1:265869184140:web:ea8dfc83c4feaa9c6b3fa9",
    measurementId: "G-D8YQEBWXMY",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const fireabseAnalytics = getAnalytics(firebase);

