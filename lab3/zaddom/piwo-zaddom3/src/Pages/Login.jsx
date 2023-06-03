import { useState, useEffect, useContext } from 'react';
import { logInWithGoogle, logInWithGithub, useUser, logout, registerWithEmail, loginWithEmail, updateAfterMailLogin } from "../Firebase/AuthService";
import UserContext from '../Data/UserContext';
import { useNavigate } from 'react-router-dom';
import { CartReducer, initialState, CartContext } from '../Data/CartReducer';
const Login = () => {


    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [, dispatcher] = useContext(CartContext);

    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const user = useUser();


    const handleRegister = () =>{
        registerWithEmail(email, password);
        setEmail("");
        setPassword("");
    }


    const handleEmailLogin =async () =>{
      await(loginWithEmail(email, password));
      
    }

    const handleGithubLogin = async () =>{
      await(logInWithGithub());

    }

    const handleGoogleLogin = async () =>{
      await(logInWithGoogle());
      
    }

    useEffect(()=>{
      if (user!=null){
        setUser(user.displayName);
        navigate('/');
      }else{
        setUser("");
      }
      
      

    },[user])

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
            <button onClick={handleEmailLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleGoogleLogin}>Login with Google</button>
            <button onClick={handleGithubLogin}>Login with Github</button>
        </div>
    );
    

};

export default Login;