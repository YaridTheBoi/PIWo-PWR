import {auth} from "./init";
import { useState, useEffect } from "react";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth" ; 

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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
            alert("Istnieje użytkownik przypisany do tego email.")
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