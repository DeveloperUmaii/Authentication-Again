import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./Firebase.config";
// import { getAuth, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const gProvider = new GoogleAuthProvider();


const AuthProvidor = ({ children }) => {

    const [user, setUser] = useState(null);



    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = ( email, password ) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, gProvider)

    }

    const logOut = () => {
        return signOut(auth)
    }


    const authinfo = {
        createUserWithEmail,
        logInUser,
        googleLogin,
        user,
        setUser,
        logOut,
    }

 useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log(currentUser);
            } else {
                setUser(currentUser);
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