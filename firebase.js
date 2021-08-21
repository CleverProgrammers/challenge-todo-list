var firebaseConfig = {
    apiKey: "AIzaSyAI1brKkR9XfOGErHdMQKyfj8GQbKR7tXA",
    authDomain: "to-do-list-519ae.firebaseapp.com",
    projectId: "to-do-list-519ae",
    storageBucket: "to-do-list-519ae.appspot.com",
    messagingSenderId: "897143349984",
    appId: "1:897143349984:web:e23f665d2848abc8fa2685",
    measurementId: "G-N6YDZCPM2S"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();