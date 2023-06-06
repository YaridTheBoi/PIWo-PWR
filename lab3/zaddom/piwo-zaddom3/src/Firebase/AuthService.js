import {auth} from "./init";
import { useState, useEffect } from "react";

import {
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth" ; 
import { addUser, getUserName } from "./DataService";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const registerWithEmail = async (mail, pass, name, surname) => {
    try{
        await(createUserWithEmailAndPassword(auth, mail,pass)
        .then((userCredential)=>{
            console.log(userCredential.user.uid);
            addUser(userCredential.user.uid,name, surname )
        }));
        
    } catch (err) {
        alert(err.message);
    }
};

export const loginWithEmail = async (mail, pass) => {
    try{
        await(signInWithEmailAndPassword(auth, mail,pass).then(updateAfterMailLogin));
        //await(updateAfterMailLogin);
    } catch (err) {
        alert(err.message);
    }
};

export const updateAfterMailLogin = async () => {
    try{
      
        const username = await (getUserName(auth.currentUser));
        console.log(username);
        await(updateProfile(auth.currentUser, {displayName: username}));

    } catch (err){
        alert(err.message);
    }
};


export const logInWithGoogle = async () =>{
    try {
        await signInWithPopup (auth, googleProvider);
    } catch (err) {
        console.error({err});
        alert(err.message);
    }

};

export const logInWithGithub = async () =>{
    try {
        await signInWithPopup (auth, githubProvider);
    } catch (err) {
    
        if (err.code === 'auth/account-exists-with-different-credential') {
            alert("Istnieje użytkownik przypisany do tego email.");
        }
        else{
            console.error({err});
            alert(err.message);
        }
    }
};

export const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) =>{
            setUser(user);
        });

        return () => unsubscribe();
    }, []);
    return user;

};

export const logout = () => signOut(auth);