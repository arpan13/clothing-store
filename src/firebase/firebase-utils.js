// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCQHjei5Sc8NOC4SyYFDDlfFCk-sgnmmaY",
  authDomain: "clothing-store-c3edd.firebaseapp.com",
  databaseURL: "https://clothing-store-c3edd.firebaseio.com",
  projectId: "clothing-store-c3edd",
  storageBucket: "clothing-store-c3edd.appspot.com",
  messagingSenderId: "373342671988",
  appId: "1:373342671988:web:3e017f294891ea0f042d21",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
