import React, { useContext, useReducer } from 'react';
import { CartContext} from '../Data/CartReducer';


const Cart = () => {
  const [state] = useContext(CartContext);
  console.log(state);
  const [, dispatcher] = useContext(CartContext);
  return (
    <div>
        <h2>Twój koszyk</h2>
        <ul>
            {state.items.map((x) => (<li>{x}</li>))}
        </ul>
        
        <button onClick={()=>dispatcher({type: "CLEAR_CART"})}>Wyczyść koszyk</button>
    </div>
  );
};

export default Cart;