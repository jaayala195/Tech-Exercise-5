import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCenKc66Vk5g8-SCrwo6KQT90OjQWHNuvU",
    authDomain: "my-auth-test-aa8d3.firebaseapp.com",
    projectId: "my-auth-test-aa8d3",
    storageBucket: "my-auth-test-aa8d3.appspot.com",
    messagingSenderId: "284803373343",
    appId: "1:284803373343:web:28aa807cf93a927578b82a",
    measurementId: "G-GR9LK6NWX8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }