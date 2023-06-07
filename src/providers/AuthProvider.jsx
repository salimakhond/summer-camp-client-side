import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createNewUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const UpdateUserData = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createNewUser,
        UpdateUserData,
        logIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;