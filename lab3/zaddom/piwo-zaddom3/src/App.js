import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import Main from './Pages/Main';
import BookMeeting from './Pages/BookMeeting';
import AddNew from './Pages/AddNew';
import './App.css';

function App() {


  const [apartmentData, setApartmentData] = useState([
    {
    name:"Nazwa1", 
    description:"Opis1 Jedynka Jedyneczka One Ichi", 
    city:"Wrocław", 
    address:"Ignacego Chrzanowskiego 19/1", 
    bedrooms_amount:"1", 
    price:"500000" },

    {
    name:"Nazwa2", 
    description:"Opis2 Dwójka Dwójeczka Two Ni", 
    city:"Bydgoszcz", 
    address:"Podwale 12", 
    bedrooms_amount:"2", 
    price:"400000" },

    {
    name:"Nazwa3", 
    description:"Opis3 Trójka Trójeczka Three San", 
    city:"Wadowice", 
    address:"Kościelna 3", 
    bedrooms_amount:"3", 
    price:"213700" },

    {
    name:"Nazwa4", 
    description:"Opis4 Czwórka Czwóreczka Four Yon", 
    city:"Białystok", 
    address:"Szkolna 17", 
    bedrooms_amount:"4", 
    price:"1000000" },
  ]);



  const mainJSX=<Main apartmentData={apartmentData}></Main>;
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
