import { initializaApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {};

const app = initializaApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
