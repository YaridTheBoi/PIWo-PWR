import { createContext } from "react";

export const CartContext = createContext();

export const initialState = { items: [] };

export const CartReducer = (state, action) => {

    const {type, payload} = action;
    switch (type) {
      case 'ADD_TO_CART':
        var index = state.items.findIndex(x => x == payload.name);
        if (index === -1){
          state = {...state, items: [...state.items, payload.name] };
        };
        
        break;
      case 'CLEAR_CART': 
        state = {items : []};
        break;
      default:
        console.error("Reducer error");
    }

    return state;
  };