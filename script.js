// Firebase Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// Your Firebase config (from your console)
const firebaseConfig = {
  apiKey: "AIzaSyAjiIPMhyXpl8L-bfzdQo-yGfD2DhFy4DQ",
  authDomain: "login-register-a6dee.firebaseapp.com",
  databaseURL: "https://login-register-a6dee-default-rtdb.firebaseio.com",
  projectId: "login-register-a6dee",
  storageBucket: "login-register-a6dee.appspot.com",
  messagingSenderId: "807873909453",
  appId: "1:807873909453:web:d6d11737294c2ea4158f84"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Register
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const userRef = ref(db, "users/" + email.replace(/\./g, "_"));
  set(userRef, {
    email,
    password
  })
    .then(() => {
      alert("Registered successfully!");
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const userRef = ref(db);
  get(child(userRef, "users/" + email.replace(/\./g, "_")))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        if (user.password === password) {
          alert("Login successful!");
          // window.location.href = "dashboard.html"; // optional
        } else {
          alert("Wrong password.");
        }
      } else {
        alert("User not found.");
      }
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
});
