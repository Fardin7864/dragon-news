import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();
    const facebook = new FacebookAuthProvider();

    const socialLogin = (provider) =>{
        signInWithPopup(auth, provider)
        .then()
        .catch(err =>{
            if (err.message === "Firebase: Error (auth/internal-error).") {
                return alert("Please check your Internet !!")
            }
        })
    }

    const createUserWithEmail= (email, password) => { 
       return createUserWithEmailAndPassword(auth, email, password)
     }
    const logInwithEmailandPass = (email,password) => { 
       return signInWithEmailAndPassword(auth,email,password)
     }

    const logOut = () => { 
         signOut(auth)
         .then()
         .catch(err => console.log(err.message))
     }

     useEffect(() => { 
        const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
          });
    
          return () => unsubscribe();
      },[user])

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