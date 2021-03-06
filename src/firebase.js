// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAn2rvCztQlO47jm8S8DeNqocK9hlqBEpY",
    authDomain: "whats-app-clone-b59aa.firebaseapp.com",
    projectId: "whats-app-clone-b59aa",
    storageBucket: "whats-app-clone-b59aa.appspot.com",
    messagingSenderId: "905252278165",
    appId: "1:905252278165:web:67d56cf3e16d3bac57b09c",
    measurementId: "G-VQGT2R33ZP"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;