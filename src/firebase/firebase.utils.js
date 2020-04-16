import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//this imports the necesssary firebase products

const config = {
    apiKey: "AIzaSyAvUklnqk_LiJUPyo0lrYtUQZ--Jkg3amg",
    authDomain: "crwn-db-b2c0d.firebaseapp.com",
    databaseURL: "https://crwn-db-b2c0d.firebaseio.com",
    projectId: "crwn-db-b2c0d",
    storageBucket: "crwn-db-b2c0d.appspot.com",
    messagingSenderId: "1033564853996",
    appId: "1:1033564853996:web:f84981102255b08395b7c9",
    measurementId: "G-DHE7HPHTMH"
  };
  //provides Firebase project configuration specific to your app

  firebase.initializeApp(config);
  //initializes app

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  //gives access to default project's Firebase services throught app

  // want to trigger Google pop up whenever we use this Google auth
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;