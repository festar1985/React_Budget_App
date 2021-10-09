import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyByOJ50yZpIeoelHKdlQ1Ho-yUUxs8W7g4",
  authDomain: "my-budget-app-8771a.firebaseapp.com",
  databaseURL:
    "https://my-budget-app-8771a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-budget-app-8771a",
  storageBucket: "my-budget-app-8771a.appspot.com",
  messagingSenderId: "239784903467",
  appId: "1:239784903467:web:70aba8e327ede755d87b6e",
  measurementId: "G-CG0CTE9NLL",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const myDatabase = getDatabase(app);

const databaseReference = ref(myDatabase);

// onValue(
//   databaseReference,
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   { onlyOnce: true }
// );

onValue(databaseReference, (snapshot) => {
  console.log(snapshot.val());
});

setTimeout(() => {
  off(databaseReference);
}, 7000);

// set(ref(myDatabase, "address/"), {
//   address: "road to hell",
//   city: "Karlskrona",
// });

//remove(ref(myDatabase, "address/city"));
