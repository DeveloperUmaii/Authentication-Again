import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./Firebase.config";
// import { getAuth, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const gProvider = new GoogleAuthProvider();


const AuthProvidor = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)



    const createUserWithEmail = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const upDateUserProfileNow = (displayName,photoURL) => {
        setloading(true);
       return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    const logInUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setloading(true);
        return signInWithPopup(auth, gProvider)

    }

    const logOut = () => {
        setloading(true);
        return signOut(auth)
    }


    const authinfo = {
        createUserWithEmail,
        upDateUserProfileNow,
        logInUser,
        googleLogin,
        user,
        setUser,
        logOut,
        loading,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setloading(false);
                console.log(currentUser);
            } else {
                setUser(null);
                setloading(false);
                
                console.log('log out use Effect')
            }
        });
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <div className="">

            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvidor;