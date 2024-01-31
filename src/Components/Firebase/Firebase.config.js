// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzcHUPB98oZ__uuz8zzWN2BpTJcCnIfXA",
  authDomain: "watch-sphere.firebaseapp.com",
  projectId: "watch-sphere",
  storageBucket: "watch-sphere.appspot.com",
  messagingSenderId: "231168628139",
  appId: "1:231168628139:web:de14d2e7b107145505eeee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;