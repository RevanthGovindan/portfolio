import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAJ646BNkDzlIwTXsEDG80XpLgw8mqMh3Q",
    authDomain: "portfolio-revanth.firebaseapp.com",
    databaseURL: "https://portfolio-revanth.firebaseio.com",
    projectId: "portfolio-revanth",
    storageBucket: "portfolio-revanth.appspot.com",
    messagingSenderId: "763993411291",
    appId: "1:763993411291:web:c3155206adaa46bc"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const fbPerformance = firebase.performance();