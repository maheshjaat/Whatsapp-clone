import firebase from "firebase";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa1yrHRfETvcIA4FjOlQ1_3X8ZCBdBnr4",
  authDomain: "whatsapp-clone-6229e.firebaseapp.com",
  projectId: "whatsapp-clone-6229e",
  storageBucket: "whatsapp-clone-6229e.appspot.com",
  messagingSenderId: "1089208721040",
  appId: "1:1089208721040:web:9cc993573f73e6a4188215",
  measurementId: "G-KDRQBDBYRB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export { auth, provider};
  export default db;
