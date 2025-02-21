
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCocANuGmC0RSRTg-6adjDKjpXUy9gbmo",
    authDomain: "proyecto-final-da704.firebaseapp.com",
    projectId: "proyecto-final-da704",
    storageBucket: "proyecto-final-da704.firebasestorage.app",
    messagingSenderId: "969643751826",
    appId: "1:969643751826:web:dfa000fec920bef3bd694b"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)