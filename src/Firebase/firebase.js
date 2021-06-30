import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAenww4g-m4sZb-McwIVS8QcCY0P4bkSZ4",
    authDomain: "coderhouse-ecommerce-37c58.firebaseapp.com",
    projectId: "coderhouse-ecommerce-37c58",
    storageBucket: "coderhouse-ecommerce-37c58.appspot.com",
    messagingSenderId: "579787458884",
    appId: "1:579787458884:web:52c405db6bb0035e4f2f11",
    measurementId: "G-Q42XSCXTCG"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();