// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCovpxMVyO6rwQR3-iJbAEYlgj0AEuAW4",
  authDomain: "nw-diary.firebaseapp.com",
  projectId: "nw-diary",
  storageBucket: "nw-diary.firebasestorage.app",
  messagingSenderId: "1025720947438",
  appId: "1:1025720947438:web:e34d1acfd2689c2d4d19ff",
  measurementId: "G-4TCYYSFXG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}