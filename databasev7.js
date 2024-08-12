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
/*
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
            email: await sha256(tolowerCase(mail)),
        });
        document.getElementById("usernameregister").value = '';
        document.getElementById("mailregister").value = '';
        document.getElementById("passwordregister").value = '';

    } catch (error) {
        alert("Invalid. There is an error...Maybe this email is already in use.");
    }
});


document.getElementById("databaselogin").addEventListener("click", async function (event) {
    event.preventDefault();
    let email = tolowerCase(document.getElementById("emaillogin").value);
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
*/

document.getElementById("loginbuttonforprivat").addEventListener("click", async function (event) {
    event.preventDefault();
    let password = await sha256(document.getElementById("passwordforprivat").value);
    if (!password) {
        alert("Invalid");
        return;
    }
    get(ref(db,'password')).then((snapshot) => {
        if (snapshot.exists()) {
            let dbpassword = snapshot.val();
            if (dbpassword === password) {
                document.getElementById("privatebox1").href = "/pinguin/pinguin";
                document.getElementById("privatebox2").href = "/pinguin/pinguin";
                document.getElementById("privatebox3").href = "/pinguin/pinguin";
                let elements = document.querySelectorAll(".privateprojectbox");
                elements.forEach(function(element){
                    element.style.backgroundColor = "white";
                })
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

 let selectedRating = 0;
        const stars = document.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('mouseover', function() {
                const value = this.getAttribute('data-value');
                updateStarClasses(value);
            });

            star.addEventListener('mouseout', function() {
                updateStarClasses(selectedRating);
            });

            star.addEventListener('click', function() {
                selectedRating = this.getAttribute('data-value');
                updateStarClasses(selectedRating);
            });
        });

        function updateStarClasses(rating) {
            stars.forEach(star => {
                const value = star.getAttribute('data-value');
                if (value <= rating) {
                    star.classList.add('selected');
                    star.classList.remove('unselected');
                } else {
                    star.classList.remove('selected');
                    star.classList.add('unselected');
                }
            });
        }

        // Feedback speichern und neues Feedback laden
        document.getElementById("suggestionform").addEventListener("submit", function(event) {
            event.preventDefault();

            // Holen Sie die Nachricht und Bewertung
            let msg = document.getElementById("suggestioninput").value;
            if (selectedRating === 0) {
                alert("Please select a rating.");
                return;
            }

            // Feedback in der Firebase Realtime Database speichern
            set(ref(db, 'feedback/' + new Date().getTime()), {  // Verwenden Sie einen Zeitstempel als Schlüssel
                message: msg,
                rating: selectedRating
            }).then(() => {
                alert("Thank you for your feedback!");
                loadFeedback();  // Nach dem Speichern das Feedback neu laden
            }).catch((error) => {
                console.error("Error writing to Firebase Database:", error);
                alert("There was an error submitting your feedback. Please try again.");
            });
        });

        // Feedback aus der Firebase Realtime Database laden
        function loadFeedback() {
            const feedbackRef = ref(db, 'feedback/');
            
            // Daten aus der Datenbank abrufen
            get(feedbackRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const feedbackData = snapshot.val();
                    const feedbackOverlay = document.querySelector(".feedbackoverlay");
                    
                    // Leere die existierenden Feedbacks
                    feedbackOverlay.innerHTML = '';  
                    
                    // Für jeden Eintrag im Feedback
                    Object.keys(feedbackData).forEach(key => {
                        const feedbackMessage = feedbackData[key].message;
                        const feedbackRating = feedbackData[key].rating;

                        // Neues div mit der Klasse feedbackbox erstellen
                        const feedbackBox = document.createElement("div");
                        feedbackBox.className = "feedbackbox";
                        
                        // Neues div mit der Klasse feedbackdes erstellen
                        const feedbackDes = document.createElement("div");
                        feedbackDes.className = "feedbackdes";
                        feedbackDes.textContent = feedbackMessage;
                        
                        // Neues div mit der Klasse feedbacktitle erstellen
                        const feedbackTitle = document.createElement("div");
                        feedbackTitle.className = "feedbacktitle";
                        feedbackTitle.innerHTML = getStars(feedbackRating);
                        
                        // Füge feedbackdes und feedbacktitle zum feedbackbox hinzu
                        feedbackBox.appendChild(feedbackTitle);
                        feedbackBox.appendChild(feedbackDes);
                        
                        // Füge feedbackbox zum feedbackoverlay hinzu
                        feedbackOverlay.appendChild(feedbackBox);
                    });
                } else {
                    console.log("No feedback available.");
                }
            }).catch((error) => {
                console.error("Error reading from Firebase Database:", error);
            });
        }

        // Funktion zum Erzeugen der Sterne
        function getStars(rating) {
            const maxStars = 5;
            let stars = '';
            for (let i = 1; i <= maxStars; i++) {
                stars += `<span class="star">${i <= rating ? '★' : '☆'}</span>`;
            }
            return stars;
        }

        // Initiales Laden der Feedback-Daten beim Laden der Seite
        window.onload = loadFeedback;