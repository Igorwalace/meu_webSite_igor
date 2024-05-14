import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "meu-portfolio-igor.firebaseapp.com",
    projectId: "meu-portfolio-igor",
    storageBucket: "meu-portfolio-igor.appspot.com",
    messagingSenderId: "639293673883",
    appId: process.env.API_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);