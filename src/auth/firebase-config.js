import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLamq5f9SjvO3A11x9HuxSh7nfdCnWxAA",
    authDomain: "recipe-23135.firebaseapp.com",
    projectId: "recipe-23135",
    storageBucket: "recipe-23135.appspot.com",
    messagingSenderId: "198527064088",
    appId: "1:198527064088:web:bc3d976ad3c3a5dd210b6d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)