import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhaWvIPOHCeZ60MR651ZemdxiCCk2XEQU",
  authDomain: "whatsapp-clone-57e5d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-57e5d.firebaseio.com",
  projectId: "whatsapp-clone-57e5d",
  storageBucket: "whatsapp-clone-57e5d.appspot.com",
  messagingSenderId: "947319667499",
  appId: "1:947319667499:web:3f560a985d0c506f0ce36e",
  measurementId: "G-410CGXM3ZW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
