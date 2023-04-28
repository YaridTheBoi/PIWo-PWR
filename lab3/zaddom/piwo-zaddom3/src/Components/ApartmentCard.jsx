
const ApartmentCard = (props) =>
{
    const apartment = props.apartment;

    return (
    <div>
      <h2>{apartment.name}</h2>
      <p>{apartment.city}, {apartment.address}</p>
      <p><i>Opis: </i>{apartment.description}</p>
      <p><i>Ilosc Sypialni: </i>{apartment.bedrooms_amount}</p>
      <p><i>Cena: </i>{apartment.price}</p>
    </div>
    );

};

export default ApartmentCard;