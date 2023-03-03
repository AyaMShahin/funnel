// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import "/src/components/modal/SiteModal";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2P0rAe_4CcHG_l4rMQc6R0nCVM66skv0",
  authDomain: "funnel-4.firebaseapp.com",
  projectId: "funnel-4",
  storageBucket: "funnel-4.appspot.com",
  messagingSenderId: "27415109187",
  appId: "1:27415109187:web:99dbc42830e44f9909fef6",
  measurementId: "G-L5P8CC36M7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const database = getDatabase(app);
const googleBtn = document.querySelector(".google-btn");
const submitData = document.getElementById("submit");
googleBtn.addEventListener("click", (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // name = displayName
      // email = email
      // photo = photoURL

      alert(user.displayName + " you have successfully logged in 😍");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorMessage + " Please login with a valid Gmail 😔");
    });
});
//Sign Up
submitData.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //sign up user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ... user.uid
      set(ref(database, "users/" + user.uid), {
        email: email,
        password: password,
      })
        .then(() => {
          // Data saved successfully!
          alert("User created successfully 😎");
        })
        .catch((error) => {
          // The write failed...
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });

  // log in user
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...

      // save log in details into real time database
      var lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate,
      })
        .then(() => {
          // Data saved successfully!
          alert("user logged in successfully 🥳");
        })
        .catch((error) => {
          // The write failed...
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

  // sign out user
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
});
