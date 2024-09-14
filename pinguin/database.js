import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getDatabase,
  ref,
  runTransaction,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHeguRsErT_IyEK-BGnydI1sLytXCIwiQ",
  authDomain: "simonp-one.firebaseapp.com",
  databaseURL:
    "https://simonp-one-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simonp-one",
  storageBucket: "simonp-one.appspot.com",
  messagingSenderId: "592659738360",
  appId: "1:592659738360:web:58e4e5094b70f2f807550d",
  measurementId: "G-VN2MKCBZ38",
};
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.getElementById("button1").addEventListener("click", () => {
  const counterRef = ref(db, "pinguin/yesCounter");
  
  runTransaction(counterRef, (currentValue) => {
    return (parseInt(currentValue, 10) || 0) + 1;
  });
});
   
document.getElementById("button2").addEventListener("click", () => {
  const counterRef = ref(db, "pinguin/noCounter");
  
  runTransaction(counterRef, (currentValue) => {
    return (parseInt(currentValue, 10) || 0) + 1;
  });
});




  