import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDrZB_vy3a2H9X7wg7WmyjJivCeEaMGK1w",
    authDomain: "campus-b34ac.firebaseapp.com",
    databaseURL: "https://campus-b34ac.firebaseio.com",
    storageBucket: "campus-b34ac.appspot.com"
};
firebase.initializeApp(config);
// Get a reference to the database service
export const db = firebase.database();
