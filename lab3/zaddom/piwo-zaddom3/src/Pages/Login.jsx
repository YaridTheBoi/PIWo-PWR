import { useState, useEffect } from 'react';

const Login = () => {

    const [usersData, setUsersData] = useState([]);


    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('./data/users.json');
          const jsonData = await response.json();
          setUsersData(jsonData.map(it => it.text))
        } catch (error) {
          console.log('Błąd ładowania json:', error);
        }
      };
  
      fetchUsers();
    }, []);

    return(
        <div>

          <input placeholder='Login' ></input>

          <input placeholder='Haslo' type="password" ></input>

          <button>Login</button>

        </div>
    );



};

export default Login;