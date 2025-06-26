import { createContext, useState } from 'react';

const CartContext = createContext({
    items: [],
    addMeal: (meal) => {},
})

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addMeal = (meal) => {
        setItems((prevItems) => {
            const existingIndex = prevItems.findIndex(item => item.id === meal.id);

            if (existingIndex !== -1) {
            const updatedItems = [...prevItems];
            const existingMeal = updatedItems[existingIndex];

            updatedItems[existingIndex] = {
                ...existingMeal,
                quantity: existingMeal.quantity + 1
            };

            return updatedItems;
            } else {
            return [...prevItems, { ...meal, quantity: 1 }];
            }
        })
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