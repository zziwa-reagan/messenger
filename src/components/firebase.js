import firebase from 'firebase/app'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyAACgoRDj_xyvASXP3Z-zvbcwSkrHM_3aY",
    authDomain: "messenger-clone-f4f1a.firebaseapp.com",
    projectId: "messenger-clone-f4f1a",
    storageBucket: "messenger-clone-f4f1a.appspot.com",
    messagingSenderId: "1065179080721",
    appId: "1:1065179080721:web:485036ce85685d4a64e9b0",
    measurementId: "G-MPLHR68YH2"
  }).auth();