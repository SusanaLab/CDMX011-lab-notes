import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAWNsJnqkzBB7K7On7OQ_mTIRHwPBumBd4",
    authDomain: "greenotes-22247.firebaseapp.com",
    databaseURL: "https://greenotes-22247-default-rtdb.firebaseio.com",
    projectId: "greenotes-22247",
    storageBucket: "greenotes-22247.appspot.com",
    messagingSenderId: "75504494354",
    appId: "1:75504494354:web:8ca6eaef0b506f3ee535cb",
    measurementId: "G-SQ5K5JS1Q8"
  };
  
 
 export const fb =  firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore();
  
