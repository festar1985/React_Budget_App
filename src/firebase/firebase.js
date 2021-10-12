import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

import config from "../firebase/firebaseConfig.json";

const app = initializeApp(config);

const googleProvider = new GoogleAuthProvider();

const myDatabase = getDatabase(app);

const databaseReference = ref(myDatabase);

export { myDatabase, databaseReference, googleProvider };
