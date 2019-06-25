import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA9aJTgKQU9VFJvrcYBjNdnR-TNq8wTO4g",
    authDomain: "psfirebase-33420.firebaseapp.com",
    databaseURL: "https://psfirebase-33420.firebaseio.com",
    projectId: "psfirebase-33420",
    storageBucket: "psfirebase-33420.appspot.com",
    messagingSenderId: "701312538058",
    appId: "1:701312538058:web:8b333d2a76c3188a"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase