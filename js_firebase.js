const firebaseConfig = {
  apiKey: "AIzaSyBV6Oq0lK6vbHzWAbaHRQDy3XgQ1K99OPM",
  authDomain: "educhat-c05b4.firebaseapp.com",
  databaseURL: "https://educhat-c05b4-default-rtdb.firebaseio.com",
  projectId: "educhat-c05b4",
  storageBucket: "educhat-c05b4.firebasestorage.app",
  messagingSenderId: "149157387044",
  appId: "1:149157387044:web:fc040d8febd1b5e30db1b1",
  measurementId: "G-5LY944E1Z2"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();