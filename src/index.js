import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBrqsZ_S4VpdcY-VQgeJ4t_EurYtI_jHFs",
    authDomain: "r-fire-chat.firebaseapp.com",
    projectId: "r-fire-chat",
    storageBucket: "r-fire-chat.appspot.com",
    messagingSenderId: "409252668445",
    appId: "1:409252668445:web:fc2b36140284a0145612f4",
    measurementId: "G-285JGQRGS9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const Context = createContext('null')
const auth = firebase.auth();
const firestore = firebase.firestore()


ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{auth , firestore , firebase}}>
          <App />
      </Context.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
