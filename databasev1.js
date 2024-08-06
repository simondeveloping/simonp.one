// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBHeguRsErT_IyEK-BGnydI1sLytXCIwiQ",

    authDomain: "simonp-one.firebaseapp.com",

    databaseURL: "https://simonp-one-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "simonp-one",

    storageBucket: "simonp-one.appspot.com",

    messagingSenderId: "592659738360",

    appId: "1:592659738360:web:58e4e5094b70f2f807550d",

    measurementId: "G-VN2MKCBZ38"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getDatabase(app);
document.getElementById("databaselogin").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("usernameregister").value;
    let mail = document.getElementById("mailregister").value;
    let password = document.getElementById("passwordregister").value;
    if(!mail|| !password|| !username){
        alert("Invalid!");
        return;
    }
    set(ref(db, 'user/' + email), {
        username: username,
        email: mail,
        password: password
    });
    alert("Success! You are now registered");
    document.getElementById("usernameregister").value = '';
    document.getElementById("mailregister").value = '';
    document.getElementById("passwordregister").value='';
})
