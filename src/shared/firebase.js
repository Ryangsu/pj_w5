import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAod4riK5yA9ruiPSlWrUzsR_9iWhL6Rfc",
    authDomain: "image-community-9c6a9.firebaseapp.com",
    projectId: "image-community-9c6a9",
    storageBucket: "image-community-9c6a9.appspot.com",
    messagingSenderId: "480985912100",
    appId: "1:480985912100:web:c3037539abb4603be959b1",
    measurementId: "G-HGGHYH4X6L"
  };

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();


export {auth, apiKey, firestore, storage};
