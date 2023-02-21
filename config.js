import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAanfEWCxlnqA0rklsk8NQ0iTaFvLxq75o",
    authDomain: "pro-67-4264c.firebaseapp.com",
    databaseURL: "https://pro-67-4264c-default-rtdb.firebaseio.com",
    projectId: "pro-67-4264c",
    storageBucket: "pro-67-4264c.appspot.com",
    messagingSenderId: "669220047589",
    appId: "1:669220047589:web:a4c9b780524a513bde620c",
    measurementId: "G-857WWQ2WEN"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();