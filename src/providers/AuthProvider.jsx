import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();
    const facebook = new FacebookAuthProvider();

    const socialLogin = (provider) =>{
       return signInWithPopup(auth, provider)
    }

    const createUserWithEmail= (email, password) => { 
       return createUserWithEmailAndPassword(auth, email, password)
     }
    const logInwithEmailandPass = (email,password) => { 
       return signInWithEmailAndPassword(auth,email,password)
     }

    const logOut = () => { 
        return signOut(auth)
     }

     useEffect(() => { 
        const unsubscribe = 
            onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                  setUser(currentUser);
                }
              });
        
            return () => {unsubscribe()};
      },[])

     const authInfo = {
            user,
            google,
            github,
            facebook,
            socialLogin,
            createUserWithEmail,
            logOut,
            logInwithEmailandPass,

     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;