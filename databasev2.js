import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
  runTransaction,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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

document
  .getElementById("loginbuttonforprivat")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    let password = await sha256(
      document.getElementById("passwordforprivat").value
    );
    if (!password) {
      alert("Invalid");
      return;
    }
    get(ref(db, "password"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let dbpassword = snapshot.val();
          if (dbpassword === password) {
            document.getElementById("privatebox1").href = "/pinguin/pinguin";
            document.getElementById("privatebox2").href = "/pinguin/pinguin";
            document.getElementById("privatebox3").href = "/pinguin/pinguin";
            let elements = document.querySelectorAll(".privateprojectbox");
            elements.forEach(function (element) {
              element.style.backgroundColor = "white";
            });
          } else {
            alert("Wrong Password");
          }
        } else {
          alert("No password found in the database!");
        }
      })
      .catch((error) => {
        console.error("Error getting data: ", error);
        alert("Error");
      });
  });
async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

let selectedRating = 0;
const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("mouseover", function () {
    const value = this.getAttribute("data-value");
    updateStarClasses(value);
  });

  star.addEventListener("mouseout", function () {
    updateStarClasses(selectedRating);
  });

  star.addEventListener("click", function () {
    selectedRating = this.getAttribute("data-value");
    updateStarClasses(selectedRating);
  });
});

function updateStarClasses(rating) {
  stars.forEach((star) => {
    const value = star.getAttribute("data-value");
    if (value <= rating) {
      star.classList.add("selected");
      star.classList.remove("unselected");
    } else {
      star.classList.remove("selected");
      star.classList.add("unselected");
    }
  });
}

document
  .getElementById("buttonforfeedback")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const msg = document.getElementById("suggestioninput").value;
    let name = document.getElementById("suggestionname").value;
    if(name === "") {
      name = "Anonymous";
    }
    if (selectedRating === 0) {
      alert("Please select a rating.");
      return;
    }

    set(ref(db, "feedback/" + new Date()), {
      message: msg,
      rating: selectedRating,
      name: name,
    })
      .then(() => {
        alert("Thank you for your feedback!");
        loadFeedback();
        document.getElementById("suggestioninput").innerHTML = "";
      })
      .catch((error) => {
        console.error("Error writing to Firebase Database:", error);
        alert("There was an error submitting your feedback. Please try again.");
      });
  });

function loadFeedback() {
  const feedbackRef = ref(db, "feedback/");

  get(feedbackRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const feedbackData = snapshot.val();
        const feedbackOverlay = document.querySelector(".feedbackoverlay");

        feedbackOverlay.innerHTML = "";

        Object.keys(feedbackData).forEach((key) => {
          const feedbackMessage = feedbackData[key].message;
          const feedbackRating = feedbackData[key].rating;
          const feedbackName = feedbackData[key].name;

          const feedbackBox = document.createElement("div");
          feedbackBox.className = "feedbackbox";

          const feedbackDes = document.createElement("div");
          feedbackDes.className = "feedbackdes";
          feedbackDes.textContent = feedbackMessage;

          const feedbackTitle = document.createElement("div");
          feedbackTitle.className = "feedbacktitle";
          feedbackTitle.innerHTML = getStars(feedbackRating);

          const feedbackNameElement = document.createElement("div");
          feedbackNameElement.className = "feedbackname";
          feedbackNameElement.textContent = feedbackName;

          feedbackBox.appendChild(feedbackTitle);
          feedbackBox.appendChild(feedbackDes);
          feedbackBox.appendChild(feedbackNameElement);

          feedbackOverlay.appendChild(feedbackBox);
        });
      } else {
        console.log("No feedback available.");
      }
    })
    .catch((error) => {
      console.error("Error reading from Firebase Database:", error);
    });
}

function getStars(rating) {
  const maxStars = 5;
  let stars = "";
  for (let i = 1; i <= maxStars; i++) {
    stars += `<span class="star">${i <= rating ? "★" : "☆"}</span>`;
  }
  return stars;
}

function visitorCounter() {
  const counterRef = ref(db, "visitCounter");

  runTransaction(counterRef, (currentValue) => {
    return (parseInt(currentValue, 10) || 0) + 1;
  });
}

window.onload = function () {
  loadFeedback();
  visitorCounter();

  const visitCounter = document.getElementById("visitorCounter");

  if (visitCounter) {
    const counterRef = ref(db, "visitCounter");
    onValue(counterRef, (snapshot) => {
      const tmp = snapshot.val();
      visitCounter.textContent = `Visitor Counter: ${tmp}`;
    });
  }
  let whiteBoxes = document.querySelectorAll(".boxWhite");
  whiteBoxes.forEach(function(box, index) {
    setTimeout(() => {
      box.classList.add("opacity1");
    }, index * 500); 
  });
};
