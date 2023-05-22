import { useState } from 'react';

import ApartmentCard from '../Components/ApartmentCard';


const Main = (props) =>
{

    const [apartmentList, setApartmentList] = useState(props.apartmentData);

    const [cityQuery, setCityQuery] = useState("");
    const [bedroomQuery, setBedroomQuery] = useState("");
    const [descriptionQuery, setDescriptionQuery] = useState("");

    console.log(apartmentList);

    const sortDefault = () =>{
        setApartmentList(props.apartmentData);
    };

    const sortAscending = () =>{
        console.log("sortuj rosnaco");
        setApartmentList(
            [...apartmentList].sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
        );
    };

    const sortDecreasing = () =>{
        console.log("sortuj malejaco");
        setApartmentList(
            [...apartmentList].sort((a,b) => parseFloat(b.price) - parseFloat(a.price))
        );
    };
    
    const apartments = apartmentList
    .filter((x) => x.city.includes(cityQuery))
    .filter((x) => x.bedrooms_amount.includes(bedroomQuery))
    .filter((x) => x.description.includes(descriptionQuery))
    .map((x)=>
      <ApartmentCard apartment={x} ></ApartmentCard>
    );


    return (
    <div>
        <div>

            <input placeholder='Miasto' value={cityQuery} onChange={e => setCityQuery(e.target.value)}></input>

            <input placeholder='Ilosc sypialni' min= "1" type="number" value={bedroomQuery} onChange={e => setBedroomQuery(e.target.value)}></input>

            <input placeholder='Opis zawiera' value={descriptionQuery} onChange={e => setDescriptionQuery(e.target.value)}></input>

            <button onClick={sortAscending}>Sortuj Ceny Rosnaco</button>

            <button onClick={sortDecreasing}>Sortuj Ceny Malejaco</button>

            <button onClick={sortDefault}>Domyslne Sortowanie</button>
        </div>


        <div>
            {apartments}
        </div>

    </div>
    );
};

export default Main;