import { useState, useEffect, useContext } from 'react';
import UserContext from '../Data/UserContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {


    const navigate = useNavigate();

    const [usersData, setUsersData] = useState([]);
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const { setUser } = useContext(UserContext);

    const [, dispatcher] = useContext(CartContext);
    useEffect(()=>{

      const fetchOptions = {
        method: "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json;charset=UTF-8",
        }
      };

      const promise = fetch("./data/users.json", fetchOptions);
      promise.then(response => response.json()).then(content => {
        setUsersData(content);
      });
    }, []);


    const handleLogin = () =>{
      const foundUser = usersData.find(user => user.mail === emailLogin && user.password === passwordLogin);

      if (foundUser){
        console.log("Poprawnie zalogowano");
        setUser(foundUser.name);
        dispatcher({type: "CLEAR_CART"});
        setEmailLogin("");
        setPasswordLogin("");
        navigate('/');
      }else{
        console.log("Niepoprawne dane logowania");
        alert("Niepoprawne dane logowania");
      }
    };
  
    //console.log(user)
    return(
        <div>

          <input placeholder='Email' value = {emailLogin} onChange={e => setEmailLogin(e.target.value) }></input>

          <input placeholder='Haslo' value= {passwordLogin} onChange={e => setPasswordLogin(e.target.value)} type="password" ></input>
 
          <button onClick={handleLogin}>Login</button>

        </div>
    );

};

export default Login;