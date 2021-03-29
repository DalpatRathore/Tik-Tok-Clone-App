import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  // COONFIG_DATA FROM FIREBASE APPLICATION
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
