import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializseAuthentication;