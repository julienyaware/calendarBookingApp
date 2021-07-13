import firebase from 'firebase';

let firebaseConfig = {
	apiKey: "AIzaSyAuaVTE7wtP582PjgobKVYHYEwc6u_erVI",
    authDomain: "cfchallenge-a1270.firebaseapp.com",
    databaseURL: "https://cfchallenge-a1270-default-rtdb.firebaseio.com",
    projectId: "cfchallenge-a1270",
    storageBucket: "cfchallenge-a1270.appspot.com",
    messagingSenderId: "964995108794",
    appId: "1:964995108794:web:498affa58cfe1b4a239783",
    measurementId: "G-5PCYTL29HJ"
};
	
// Initializing Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export default db;
