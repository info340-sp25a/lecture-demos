import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLYoV23Y7cVBenykypUQsUUOBMbW06Bw",
  authDomain: "react-chat-sp25a.firebaseapp.com",
  projectId: "react-chat-sp25a",
  storageBucket: "react-chat-sp25a.firebasestorage.app",
  messagingSenderId: "560365851189",
  appId: "1:560365851189:web:f8ce1166f1ab1d4b50977c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);