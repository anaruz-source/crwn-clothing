import React, { createContext, useState, useEffect } from 'react'

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemsCount, getTotalPrice } from './cart.utils'

export const CartContext = createContext({
   hidden: true,
   cartItems: [],
   cartItemsCount: 0,
   total: 0,
   addItem: () => {},
   removeItem: () => {},
   clearItemFromCart: () => {},
    toggleHidden: () => { },
})


const CartProvider = ({ children }) => { 
    

    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [total, setTotal] = useState(0)


    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden)

    useEffect(() => setCartItemsCount(getCartItemsCount(cartItems)), [cartItems] )
    useEffect(() => setTotal(getTotalPrice(cartItems)), [cartItems] )

    return(

        <CartContext.Provider value = {{
            hidden,
            cartItems,
            cartItemsCount,
            total,
            toggleHidden,
            addItem,
            removeItem,
            clearItemFromCart,

        }}>
        
            { children }
        
        </CartContext.Provider>
    )
}
export default CartProvider