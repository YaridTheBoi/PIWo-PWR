import { useState, useEffect, useContext } from 'react';
import { logInWithGoogle, logInWithGithub, useUser, logout, registerWithEmail, loginWithEmail, updateAfterMailLogin } from "../Firebase/AuthService";
import UserContext from '../Data/UserContext';
import { useNavigate } from 'react-router-dom';
import { CartReducer, initialState, CartContext } from '../Data/CartReducer';
const Login = () => {


    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [, dispatcher] = useContext(CartContext);

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [repeatPassword, setRepeatPassword]= useState("");
    const [name, setName]= useState("");
    const [surname, setSurname]= useState("");


    const [isRegister, setIsRegiser] = useState(false);
    const user = useUser();


  const switchToRegister = () => {
    setIsRegiser(!isRegister);
  }

    const handleRegister = () =>{
      if(password!=repeatPassword){
        alert("Hasła nie są takie same");
      }
        registerWithEmail(email, password, name, surname);
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setName("");
        setSurname("");
        setName("");

    }


    const handleEmailLogin =async () =>{
      await(loginWithEmail(email, password));
      
    }

    const handleGithubLogin = () =>{
      logInWithGithub();

    }

    const handleGoogleLogin = () =>{
      logInWithGoogle();
      
    }

    useEffect(()=>{
      if (user!=null){
        setUser(user.displayName);
        //console.log(user);
      }else{
        setUser("");
      }
      
      

    },[user])

    if(user){
        return (
            <div>
                <h2>Jestes zalogowany jako {user.displayName}</h2>
                <button onClick={logout}>Wyloguj mnie</button>
            </div>
            );    
    }

    if(isRegister){
      return (
        <div>
            <h2>Zarejestruj sie</h2>
            <input type="text" placeholder="imie" required={true} value={name} onChange={e => setName(e.target.value)}></input>
            <input type="text" placeholder="nazwisko" required={true} value={surname} onChange={e => setSurname(e.target.value)}></input>
            <input type="text" placeholder="email" required={true} value={email} onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="haslo" required={true} value={password} onChange={e => setPassword(e.target.value)}></input>
            <input type="password" placeholder="powtorz haslo" required={true} value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}></input>
            <button onClick={handleRegister}>Zarejestruj</button>
            <button onClick={switchToRegister}>Wroc do logowania</button>

        </div>
    );
    }

    return (
        <div>
            <h2>Zaloguj sie</h2>

            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            <input type="password" placeholder="haslo" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button onClick={handleEmailLogin}>Zaloguj</button>
            <button onClick={switchToRegister}>Zarejestruj</button>
            <button onClick={handleGoogleLogin}>Kontunuuj z google</button>
            <button onClick={handleGithubLogin}>Kontynuuj z Github</button>
        </div>
    );
    

};

export default Login;