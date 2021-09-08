import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDKQzwBgtJFEsMJnOnsmKYxza9aFhICg7s",
  authDomain: "buzzer-app-716b1.firebaseapp.com",
  projectId: "buzzer-app-716b1",
  storageBucket: "buzzer-app-716b1.appspot.com",
  messagingSenderId: "934281539013",
  appId: "1:934281539013:web:9d5527382c93b0290fefac"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database()