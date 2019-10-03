import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2venFd2Bht0uIF2daHdrVuNEwNoAry_0",
    authDomain: "jobdirecto.firebaseapp.com",
    databaseURL: "https://jobdirecto.firebaseio.com",
    projectId: "jobdirecto",
    storageBucket: "",
    messagingSenderId: "686429656552",
    appId: "1:686429656552:web:36608c4c1813e96abdc05d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
