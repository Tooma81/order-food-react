import { createContext, useState } from 'react';

const CartContext = createContext({
    items: [],
    addMeal: (meal) => {},
})

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addMeal = (meal) => {
        setItems((prevItems) => [...prevItems, meal]);
    };

    const contextValue = {
        items,
        addMeal
    }
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext