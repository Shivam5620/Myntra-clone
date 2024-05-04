import { createContext, useReducer } from "react";


const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
});

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const existingCartItemIndex = state.items ? state.items.findIndex(
                (item) => item.id === action.item.id
            ) : -1;
            if (existingCartItemIndex > -1) {
                const updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = {
                    ...updatedItems[existingCartItemIndex],
                    quantity: updatedItems[existingCartItemIndex].quantity + 1
                };
                return { ...state, items: updatedItems };
            } else {
                return { ...state, items: [...(state.items || []), { ...action.item, quantity: 1 }] };
            }
        default:
            return state;
    }
}

export function CartContextProvider({ children }) {

    const [cart, dispatch] = useReducer(cartReducer, { item: [] });

    const cartContext = {
        items: cart.items,
        addItem
    };
    function addItem(item) {
        dispatch({ type: 'ADD_ITEM', item })
    }




    console.log(cartContext);
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;