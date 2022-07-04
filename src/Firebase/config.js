// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqR2JGZOXE1E-0c4_g2vpk9VbBL2hiMpQ",
  authDomain: "mercedes-llanos.firebaseapp.com",
  projectId: "mercedes-llanos",
  storageBucket: "mercedes-llanos.appspot.com",
  messagingSenderId: "275533396970",
  appId: "1:275533396970:web:13e8934d4f97a760f69093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
  return app
}