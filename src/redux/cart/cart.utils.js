import cartItem from "../../components/cart-item/cart-item.component"

 export const addItemToCart = (cartItems, cartItem) => {

 const exitingItem = cartItems.find(item =>  item.id === cartItem.id)

   if(exitingItem) {
              
      return cartItems.map (item =>  item.id === cartItem.id ? {...item, quantity: item.quantity + 1 } : item)
   }

  return [...cartItems, {...cartItem, quantity: 1}]

} 

export const removeItemFromCart = (items, item) => {

  const existingItem = items.find( elem => elem.id === item.id)

  if(existingItem.quantity === 1) {

    return items.filter(elem => elem.id !== item.id)
  }

  return items.map (elem => elem.id === item.id ? {...elem, quantity: elem.quantity -1} : elem)
}
