/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { FaAppStore } from "react-icons/fa";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signIn = (email , password ) =>{
        return signInWithEmailAndPassword(auth, email , password)
    }

    const logedOut = () =>{
        signOut(auth);
    }

    //  ! observe auth state change
    useEffect(()=>{
     const unSubscribe =   onAuthStateChanged(auth , currentUser =>{
            console.log('auth state change' , currentUser);
            setUser(currentUser)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logedOut
    }

  
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
