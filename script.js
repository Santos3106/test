// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAjiIPMhyXpl8L-bfzdQo-yGfD2DhFy4DQ",
  authDomain: "login-register-a6dee.firebaseapp.com",
  projectId: "login-register-a6dee",
  storageBucket: "login-register-a6dee.appspot.com",
  messagingSenderId: "807873909453",
  appId: "1:807873909453:web:d6d11737294c2ea4158f84"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register user
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registered Successfully!");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

// Login user
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      console.log(userCredential.user);
      // window.location.href = "dashboard.html"; // Optional
    })
    .catch((error) => {
      alert("Login Error: " + error.message);
    });
});
