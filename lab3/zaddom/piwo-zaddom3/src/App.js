import { useState } from 'react';

import Main from './Pages/Main';
import './App.css';

function App() {


  const apartmentData = [
    {id:"1", 
    name:"Nazwa1", 
    description:"Opis1 Jedynka Jedyneczka One Ichi", 
    city:"Wrocław", 
    address:"Ignacego Chrzanowskiego 19/1", 
    bedrooms_amount:"1", 
    price:"500000" },

    {id:"2", 
    name:"Nazwa2", 
    description:"Opis2 Dwójka Dwójeczka Two Ni", 
    city:"Bydgoszcz", 
    address:"Podwale 12", 
    bedrooms_amount:"2", 
    price:"400000" },

    {id:3, 
    name:"Nazwa3", 
    description:"Opis3 Trójka Trójeczka Three San", 
    city:"Wadowice", 
    address:"Kościelna 3", 
    bedrooms_amount:"3", 
    price:"213700" },

    {id:"4", 
    name:"Nazwa4", 
    description:"Opis4 Czwórka Czwóreczka Four Yon", 
    city:"Białystok", 
    address:"Szkolna 17", 
    bedrooms_amount:"4", 
    price:"1000000" },
  ];

  
  return (
    <Main apartmentData={apartmentData}></Main>
  );
}

export default App;
