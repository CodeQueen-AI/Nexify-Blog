import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdc7LgLUt0trg937JpnRcY7A4ivFhfm4s",
  authDomain: "blog-web-814f3.firebaseapp.com",
  projectId: "blog-web-814f3",
  storageBucket: "blog-web-814f3.appspot.com",   
  messagingSenderId: "583909217441",
  appId: "1:583909217441:web:c6a7131254d1bff3e50ce0",
  measurementId: "G-FM03XHK8LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);  
