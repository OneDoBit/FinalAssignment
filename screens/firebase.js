import * as firebase from "firebase";
//importing firebase

var config = {
  apiKey: "AIzaSyBwSB1-7hPKuZypUUpVAiSZOkeLIC6QRSs",
  authDomain: "webd303-ba508.firebaseapp.com",
  databaseURL: "https://webd303-ba508.firebaseio.com",
  projectId: "webd303-ba508",
  storageBucket: "webd303-ba508.appspot.com",
  messagingSenderId: "37572999687",
  appId: "1:37572999687:web:780b2f54c0e4a67770c8a2"
};
firebase.initializeApp(config);

// My credentials

export default firebase;
//Exporting so I can use it on other pages