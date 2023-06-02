import { logInWithGoogle, logInWithGithub, useUser, logout, registerWithEmail, loginWithEmail, updateAfterMailLogin } from "../Firebase/AuthService";
import { useState } from "react";
const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const user = useUser();


    const handleRegister = () =>{
        registerWithEmail(email, password);
        setEmail("");
        setPassword("");
    }

    const handleLogin = () =>{
        loginWithEmail(email, password);
        //updateAfterMailLogin();
        setEmail("");
        setPassword("");
    }
    if(user){
        return (
            <div>
                <h2>You are logged in as {user.displayName}</h2>
                <button onClick={logout}>Log me out</button>
            </div>
            );    
    }
    return (
        <div>
            <h2>Please log in</h2>

            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            <button onClick={logInWithGoogle}>Login with Google</button>
            <button onClick={logInWithGithub}>Login with Github</button>
        </div>
        );
}

export default Login;