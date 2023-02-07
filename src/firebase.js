// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvCy8nje-ITcmIpBjhLuY0TpKrlEf6HXw",
  authDomain: "communomy-auth.firebaseapp.com",
  projectId: "communomy-auth",
  storageBucket: "communomy-auth.appspot.com",
  messagingSenderId: "454791585571",
  appId: "1:454791585571:web:3df3ca0eecba041beeb696",
  measurementId: "G-6RPDSP21XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export{app,auth};
