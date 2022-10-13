import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCxETNCNicOYpHE3tG5M7quxIeGa0Wpcmc",
    authDomain: "e-online-61c02.firebaseapp.com",
    projectId: "e-online-61c02",
    storageBucket: "e-online-61c02.appspot.com",
    messagingSenderId: "826595243080",
    appId: "1:826595243080:web:3f4b9c239962ea7498947d",
    measurementId: "G-0DJTHWK09V"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 