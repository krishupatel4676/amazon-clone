import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsCW1QKYrB0BcHflC5_kCg-_kc_TX0T1Q",
  authDomain: "cloning-b9c75.firebaseapp.com",
  projectId: "cloning-b9c75",
  storageBucket: "cloning-b9c75.appspot.com",
  messagingSenderId: "58185528515",
  appId: "1:58185528515:web:fa259467ebae9cea159e76",
  measurementId: "G-VYELB7PEJD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
