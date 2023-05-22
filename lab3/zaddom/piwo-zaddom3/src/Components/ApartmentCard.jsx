import { useContext } from "react";
import { CartContext } from "../Data/CartReducer";

const ApartmentCard = (props) =>
{
    const apartment = props.apartment;
    const [, dispatcher] = useContext(CartContext);


    return (
    <div>
      <h2>{apartment.name}</h2>
      <p>{apartment.city}, {apartment.address}</p>
      <p><i>Opis: </i>{apartment.description}</p>
      <p><i>Ilosc Sypialni: </i>{apartment.bedrooms_amount}</p>
      <p><i>Cena: </i>{apartment.price}</p>
      <button onClick={()=>dispatcher({type: "ADD_TO_CART", payload: {name: apartment.name}})}>Dodaj do koszyka</button>
    </div>
    );

};

export default ApartmentCard;