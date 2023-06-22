import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCyycZo9LPoO045aOvfewMkA5h3aFUWqi4",
  authDomain: "linkedin-clone-ec13c.firebaseapp.com",
  projectId: "linkedin-clone-ec13c",
  storageBucket: "linkedin-clone-ec13c.appspot.com",
  messagingSenderId: "101406330071",
  appId: "1:101406330071:web:3d151a206d5eacf9503492",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db,auth };
