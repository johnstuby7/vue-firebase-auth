import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqN6iYAFFEURlmmveHeyGPLZdpfTk_coA",
  authDomain: "vue-firebase-automation-15506.firebaseapp.com",
  projectId: "vue-firebase-automation-15506",
  storageBucket: "vue-firebase-automation-15506.appspot.com",
  messagingSenderId: "298214234086",
  appId: "1:298214234086:web:7fc267b759c2475d20e827",
  measurementId: "G-TKGWHEFBSK",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
