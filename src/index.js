import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
  const firebaseConfig = {
  apiKey: "AIzaSyCszizOm_K6kv_9hGZrSMQlHOJdRGibXWU",
  authDomain: "cart-data-18f09.firebaseapp.com",
  databaseURL: "https://cart-data-18f09.firebaseio.com",
  projectId: "cart-data-18f09",
  storageBucket: "cart-data-18f09.appspot.com",
  messagingSenderId: "512513957164",
  appId: "1:512513957164:web:67253933da6d4b62f6e089"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
