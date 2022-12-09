// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyn2R0JSW_i2VhcNgNNfPFoB4iIBioMTA",
  authDomain: "yoheladerias-ecommerce.firebaseapp.com",
  projectId: "yoheladerias-ecommerce",
  storageBucket: "yoheladerias-ecommerce.appspot.com",
  messagingSenderId: "39288954887",
  appId: "1:39288954887:web:7a40bd9e90b10883828aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);