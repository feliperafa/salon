import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

// import './service/firebase'

const firebaseConfig = {
  // apiKey:"AIzaSyCKzJ31-dGVbX3Lc88Gds4TezNJUdIjH10",
  apiKey: process.env.REACT_APP_API_KEY,
  // authDomain:"letmeask-bf429.firebaseapp.com",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL:"https://letmeask-bf429-default-rtdb.firebaseio.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId:"letmeask-bf429",
  projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: "letmeask-bf429.appspot.com",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: "769254771758",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId:"1:769254771758:web:4d6d0e6c4b94573a1d63bf"
  appId: process.env.REACT_APP_API_ID
};

firebase.initializeApp(firebaseConfig)
// console.log(firebaseConfig)

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase }