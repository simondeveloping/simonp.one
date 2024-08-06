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

document.getElementById("databaseregister").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("usernameregister").value;
    let mail = document.getElementById("mailregister").value;
    let password = document.getElementById("passwordregister").value;
    if (!mail || !password || !username) {
        alert("Invalid!");
        return;
    }
    if (!mail.includes("@") && !mail.includes(".")) {
        alert("Mail invalid!");
        return;
    }
    set(ref(db, 'user/' + username), {
        username: username,
        email: mail,
        password: password
    });
    alert("Success! You are now registered");
    document.getElementById("usernameregister").value = '';
    document.getElementById("mailregister").value = '';
    document.getElementById("passwordregister").value = '';
})

document.getElementById("databaselogin").addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("usernamelogin").value;
    let password = document.getElementById("passwordlogin").value;
    if (!username || !password) {
        alert("Invalid!");
        return;
    }
    let usersRef = ref(db, 'user');
    // Alle Benutzer abrufen
    get(usersRef).then((snapshot) => {
        var user;
        if (snapshot.exists()) {
            let users = snapshot.val();
            let userFound = false;
            // Durch alle Benutzer iterieren
            for (let key in users) {
                if (users[key].username === username && users[key].password === password) {
                    userFound = true;
                    user = users[key];
                    break;
                }
            }
            if (userFound) {
                alert("Login Successful!");
                document.getElementById("loginas").innerHTML += "<u>" + user.username + "</u>";
            } else {
                alert("Invalid credentials!");
            }
        } else {
            alert("No users found!");
        }
    }).catch((error) => {
        console.error("Error getting data: ", error);
        alert("There was an error logging in.");
    });
})
document.getElementById("loginbuttonforprivat").addEventListener("click", function (event) {
    event.preventDefault();
    let password = document.getElementById("passwordforprivat").value;
    if (!password) {
        alert("Invalid");
        return;
    }
    get(ref(db, 'password')).then((snapshot) => {
        if (snapshot.exists()) {
            let dbpassword = snapshot.val();
            if (dbpassword === password) {
                document.getElementById("privatebox1").href = "/pinguin/pinguin";
                document.getElementById("privatebox2").href = "/pinguin/pinguin";
                document.getElementById("privatebox3").href = "/pinguin/pinguin";
                document.getElementById("privateboxout1").style.backgroundColor = "white";
                document.getElementById("privateboxout2").style.backgroundColor = "white";
                document.getElementById("privateboxout3").style.backgroundColor = "white";
            } else {
                alert("Wrong Password");
            }
        } else {
            alert("No password found in the database!");
        }
    }).catch((error) => {
        console.error("Error getting data: ", error);
        alert("Error");
    });
})
