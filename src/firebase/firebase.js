import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import config from "../firebase/firebaseConfig.json";

const app = initializeApp(config);

const myDatabase = getDatabase(app);

const databaseReference = ref(myDatabase);

export { myDatabase, databaseReference };
