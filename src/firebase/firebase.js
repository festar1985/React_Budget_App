import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const envConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(envConfig);

const googleProvider = new GoogleAuthProvider();

const myDatabase = getDatabase(app);

const databaseReference = ref(myDatabase);

export { myDatabase, databaseReference, googleProvider };
