import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddNew = (props) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [address, setAdress] = useState("");
    const [bedroomsAmount, setBedroomsAmount] = useState("");
    const [price, setPrice] = useState("");



    const handleSubmit = (event) =>{
        event.preventDefault();
        let newObject =     {
            name: name, 
            description: description, 
            city:city,
            address:address, 
            bedrooms_amount:bedroomsAmount, 
            price:price };

        props.setApartmentData(x => [...x, newObject]);
        navigate('/')

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input placeholder='Nazwa' value={name} onChange={e => setName(e.target.value)} ></input>

                <input placeholder='Opis' value={description} onChange={e => setDescription(e.target.value)}></input>

                <input placeholder='Miasto' value={city} onChange={e => setCity(e.target.value)}></input>

                <input placeholder='Adres' value={address} onChange={e => setAdress(e.target.value)}></input>

                <input placeholder='Ilosc sypialni' min= "1" type="number" value={bedroomsAmount} onChange={e => setBedroomsAmount(e.target.value)}></input>

                <input placeholder='Cena' min= "1" type="number" value={price} onChange={e => setPrice(e.target.value)}></input>

                <button type='submit'>Dodaj</button>

            </div>
        </form>

    );
};

export default AddNew;