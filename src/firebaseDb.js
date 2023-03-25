import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrND3m5A1C_c7ZBmNdF2URfEnisOFP2sI",

  authDomain: "mysubscriptions-b1a5e.firebaseapp.com",

  projectId: "mysubscriptions-b1a5e",

  storageBucket: "mysubscriptions-b1a5e.appspot.com",

  messagingSenderId: "602146392970",

  appId: "1:602146392970:web:d1b97cfa83b5b00bffd673",

  measurementId: "G-M2ZZ9726VH",
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
