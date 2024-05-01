import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3C9O2dkpBg842WDK6t6DW-I-lUOa_ENk",
  authDomain: "zorko-main.firebaseapp.com",
  projectId: "zorko-main",
  storageBucket: "zorko-main.appspot.com",
  messagingSenderId: "593730418980",
  appId: "1:593730418980:web:31ba2419bea3d0124cdbb1",
  measurementId: "G-3J58TMQF2K",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  
}
const app=firebase.initializeApp(firebaseConfig);
export { firebase ,app};
