import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Main from './Pages/Main';
import BookMeeting from './Pages/BookMeeting';
import AddNew from './Pages/AddNew';
import './App.css';

function App() {


  const [apartmentData, setApartmentData] = useState([]);
  useEffect(()=>{

    const fetchOptions = {
      method: "GET",
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json;charset=UTF-8",
      }
    }
    const promise = fetch("./data/apartments.json", fetchOptions);
    promise.then(response => response.json()).then(content => {
      setApartmentData(content);
    })
  }, [])


  console.log(apartmentData);
  let mainJSX = apartmentData.length && <Main apartmentData={apartmentData} />;
  return ( 
    <div>
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
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={mainJSX}/>
          <Route path='/bookmeeting' element={<BookMeeting></BookMeeting>} />
          <Route path='/addnew' element={<AddNew setApartmentData={setApartmentData}></AddNew>} />
        </Routes>
      </BrowserRouter>

      
    </div>
   
  );
}

export default App;
