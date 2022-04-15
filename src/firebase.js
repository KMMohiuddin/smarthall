import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCsUGJdD2n2Hu85nDmWp1-cmrWjNwR-d9I",
  authDomain: "smart-hall-aa20f.firebaseapp.com",
  databaseURL: "https://smart-hall-aa20f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-hall-aa20f",
  storageBucket: "smart-hall-aa20f.appspot.com",
  messagingSenderId: "724658587264",
  appId: "1:724658587264:web:54dc9fe37b5149bedb0865",
  measurementId: "G-QXY9VPY61N"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider} 
export default db