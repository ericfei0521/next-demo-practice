import firebase from "firebase/app";
import "firebase/firestore";
const  firebaseConfig = {
    apiKey: "AIzaSyCYH_RV95uHFxj-Eit-erlNc8mHK9_UGw8",
    authDomain: "nextdemo-b5e9c.firebaseapp.com",
    projectId: "nextdemo-b5e9c",
    storageBucket: "nextdemo-b5e9c.appspot.com",
    messagingSenderId: "26411727991",
    appId: "1:26411727991:web:bade57800fe63a26299a72",
    measurementId: "G-TLLDKZ6G1P"
  };

const firebaseSet = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const firestore = firebaseSet.firestore();
export default firebaseSet;