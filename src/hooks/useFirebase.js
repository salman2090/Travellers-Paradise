import { GoogleAuthProvider, getAuth, signInWithPopup, signOut,  onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializseAuthentication from "../Pages/Login/Firebase/firebase.init";

initializseAuthentication();

const useFirebase = () => {

     const[user, setUser] = useState({});
    const[isLoading, setIsloading] = useState(true);
    const [isLogin,setIsLogin]=useState(false);

    const auth = getAuth();



    //handle google sign in
    const signInUsingGoogle = () => {
        setIsloading(true);
        
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        
            .then(result => {
                setUser(result.user);
                sessionStorage.setItem("email", result.user.email);
                setIsLogin(true);
            })
            .finally(() => setIsloading(false));
    }

       // Observe User State Change
       useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, []);

        // handle logout
        const logOut = () => {
            setIsloading(true);
            signOut(auth)
                .then(() => { })
                .finally(() => setIsloading(false));
        }

    return {
        user,
        isLoading,
        isLogin,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;

