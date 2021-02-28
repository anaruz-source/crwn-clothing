 const addItemToCart = (cartItems, cartItem) => {

 const exitingItem = cartItems.find(item =>  item.id === cartItem.id)

   if(exitingItem) {
              
      return cartItems.map (item =>  item.id === cartItem.id ? {...item, quantity: item.quantity + 1 } : item)
   }

  return [...cartItems, {...cartItem, quantity: 1}]

} 

export default addItemToCart