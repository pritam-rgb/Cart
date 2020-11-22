import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_jZ1HqGHlaEfhHF1Sq_OUyI3_vHJYcac",
  authDomain: "shopping-cart-55c26.firebaseapp.com",
  databaseURL: "https://shopping-cart-55c26.firebaseio.com",
  projectId: "shopping-cart-55c26",
  storageBucket: "shopping-cart-55c26.appspot.com",
  messagingSenderId: "323288917810",
  appId: "1:323288917810:web:b2ba7b5e8aed5caf7ed92b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
