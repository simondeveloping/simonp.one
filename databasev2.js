// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


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
const auth = getAuth(app);

document.getElementById("databaseregister").addEventListener("click", async function (event) {
    event.preventDefault();

    let username = document.getElementById("usernameregister").value;
    let mail = document.getElementById("mailregister").value;
    let password = document.getElementById("passwordregister").value;
    if (!mail || !password || !username) {
        alert("Invalid!");
        return;
    }
    if (!mail.includes("@") || !mail.includes(".")) {
        alert("Mail invalid!");
        return;
    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, mail, password);
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                alert("You are now registered. Please verify your email!");
                // ...
            });
        set(ref(db, 'user/' + username), {
            username: username,
            email: await sha256(mail),
        });
        document.getElementById("usernameregister").value = '';
        document.getElementById("mailregister").value = '';
        document.getElementById("passwordregister").value = '';

    } catch (error) {
        alert("Invalid. Email already in Use...");
    }
});


document.getElementById("databaselogin").addEventListener("click", async function (event) {
    event.preventDefault();
    let email = document.getElementById("emaillogin").value;
    let password = document.getElementById("passwordlogin").value;
    if (!email || !password) {
        alert("Invalid!");
        return;
    }
    let mail = await sha256(email);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Überprüfen, ob die E-Mail-Adresse verifiziert ist
        if (user.emailVerified) {
            alert("Success! You are logged in.");
            let usersRef = ref(db, 'user');
            get(usersRef).then((snapshot) => {
                var user;
                if (snapshot.exists()) {
                    let users = snapshot.val();
                    let userFound = false;
                    // Durch alle Benutzer iterieren
                    for (let key in users) {
                        if (users[key].email === mail) {
                            userFound = true;
                            user = users[key];
                            break;
                        }
                    }
                    if (userFound) {
                        document.getElementById("loginas").innerHTML = "Logged in as: " + "<u>" + user.username + "</u>";
                        document.getElementById("passwordforprivat").disabled = false;
                    }
                }
            }).catch((error) => {
                console.error("Error getting data: ", error);
                alert("There was an error logging in.");
            });
        } else {
            alert("You need to verify your email first!");
            await auth.signOut(); // Abmelden, bis die E-Mail verifiziert ist
        }
    } catch (error) {
        alert("Invalid login attempt. Please check your email and password and try again.");
    }

})
document.getElementById("forgotpasswort").addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("emaillogin").value;
    if (!email) {
        alert("Please enter the email address you want to reset in the login box.");
        return;
    }
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Email send! Reset your password...");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error. Not able to reset Password...");
        });
})


document.getElementById("loginbuttonforprivat").addEventListener("click", async function (event) {
    event.preventDefault();
    let password = await sha256(document.getElementById("passwordforprivat").value);
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
async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

