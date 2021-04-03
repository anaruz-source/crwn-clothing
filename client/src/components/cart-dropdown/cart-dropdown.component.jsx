import React, { useContext } from 'react'

import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'


import { CartContext } from '../../providers/cart/cart.provider'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ history }) => {
  
  const { cartItems, toggleHidden } = useContext(CartContext)
  return (

    <div className='cart-dropdown'>
        <div className='cart-items'>
        
          {   cartItems.length ? 
              (cartItems.map( item => (<CartItem key={item.id} item={item} />)))
              :(<span className='empty-message'>Cart is Empty </span>)

          }
        </div>

        <CustomButton onClick = { () => {
            history.push('/checkout')
            toggleHidden()
            
          }}>
            CHECKOUT NOW
        </CustomButton>
    </div>
) 

}


export default withRouter(CartDropdown)