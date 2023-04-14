import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCtdHpLZskvh3kiDBkMkFrq4LBpTZ7Gn8",
  authDomain: "proyecto-react-coderhous-9866f.firebaseapp.com",
  projectId: "proyecto-react-coderhous-9866f",
  storageBucket: "proyecto-react-coderhous-9866f.appspot.com",
  messagingSenderId: "398070370785",
  appId: "1:398070370785:web:71fd080d8db859ddac42a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
