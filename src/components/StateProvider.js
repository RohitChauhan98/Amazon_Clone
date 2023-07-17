import { createContext, useReducer, useContext } from 'react'

//Prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provider the data layer
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

export const initialState = {
    basket: [],
};


export function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET': {
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        }
        
        case 'DELETE_FROM_BASKET': {
            const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as ids not in basket!`)
            }
            return {
                ...state,
                basket: newBasket
            }
        }

        default:
            return state;
    }
}
