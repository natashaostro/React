import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJOIKEiLMyVI2nvlUH9hzQ863xuobMIqo",
  authDomain: "agn-9a2e4.firebaseapp.com",
  projectId: "agn-9a2e4",
  storageBucket: "agn-9a2e4.appspot.com",
  messagingSenderId: "279470333502",
  appId: "1:279470333502:web:801fe5826d5d1e9b1b3b6f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);