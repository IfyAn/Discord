import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsC_vy7XHGvXCrwWgpzYoHcd-gPduGU1A",
  authDomain: "twit-social.firebaseapp.com",
  projectId: "twit-social",
  storageBucket: "twit-social.appspot.com",
  messagingSenderId: "511804668932",
  appId: "1:511804668932:web:02f4f1cc259dd08dbc0951"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
