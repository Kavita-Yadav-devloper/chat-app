import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCB-L6Yf6qKga1C1QGrblNVQfDg561gEtc",
  authDomain: "chat-app-with-react-9f2ae.firebaseapp.com",
  databaseURL: "https://chat-app-with-react-9f2ae-default-rtdb.firebaseio.com",
  projectId: "chat-app-with-react-9f2ae",
  storageBucket: "chat-app-with-react-9f2ae.appspot.com",
  messagingSenderId: "1075582253747",
  appId: "1:1075582253747:web:e731ccd2379e02851bcec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
