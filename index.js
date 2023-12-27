import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUxcAVtIqFtwExMm_E39ZzCccvZgIXk-0",
  authDomain: "easy-share-7982e.firebaseapp.com",
  projectId: "easy-share-7982e",
  storageBucket: "easy-share-7982e.appspot.com",
  messagingSenderId: "916767209600",
  appId: "1:916767209600:web:28445d87a6a6b8d5828e65",
  measurementId: "G-SKRP2BGJ5N",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage();
