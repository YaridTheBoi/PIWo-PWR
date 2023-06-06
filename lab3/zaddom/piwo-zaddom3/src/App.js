import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { useEffect, useReducer, useState } from 'react';
import Main from './Pages/Main';
import BookMeeting from './Pages/BookMeeting';
import AddNew from './Pages/AddNew';
import Login from './Pages/Login';
import Cart from './Pages/Cart'
import './App.css';
import UserContext from './Data/UserContext';
import { CartReducer, initialState, CartContext } from './Data/CartReducer';
import { logout } from './Firebase/AuthService';

function App() {


  const [apartmentData, setApartmentData] = useState([]);
  const [user, setUser] = useState("");
  

  useEffect(()=>{

    const fetchOptions = {
      method: "GET",
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json;charset=UTF-8",
      }
    };
    const promise = fetch("./data/apartments.json", fetchOptions);
    promise.then(response => response.json()).then(content => {
      setApartmentData(content);
    });
  }, []);


  const handleLogout = () =>{
    logout();
    setUser("");
    dispatcher({type: "CLEAR_CART"});
  }
  //console.log(apartmentData);

  const [state, dispatcher] = useReducer(CartReducer, initialState );

  let mainJSX = apartmentData.length && <Main apartmentData={apartmentData} />;
  return ( 
    <div>
      <CartContext.Provider value={[state, dispatcher]}>
      <UserContext.Provider value={{user, setUser}}>
        
        <BrowserRouter>
          <nav>
            <Link to='/' className="navbar-brand nav-link">RentHouse</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/bookmeeting' className="nav-link">Book Meeting</Link>
              </li>
              <li className="nav-item">
                <Link to='/addnew' className="nav-link">Add New</Link>
              </li>
              {user ?              
                <li className="nav-item">
                  <Link to='/cart' className="nav-link">My Cart</Link>
                </li>
                :
                <div></div>
              }
              <li className="nav-item">
                {user ? <b>Hello {user} <button onClick={handleLogout}>Logout</button></b>: <Link to='/login' className="nav-link">Login</Link>}
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={mainJSX}/>
            <Route path='/bookmeeting' element={<BookMeeting></BookMeeting>} />
            <Route path='/addnew' element={<AddNew setApartmentData={setApartmentData}></AddNew>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/cart' element = {<Cart></Cart>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      </CartContext.Provider>
    </div>
   
  );
};

export default App;
