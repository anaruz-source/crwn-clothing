import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss'
import { CartContext } from '../../providers/cart/cart.provider'


const CheckOutPage = () => {
    
     const { cartItems, total } = useContext(CartContext)

    return(

    <div className='checkout-page'>

       <div className='checkout-header'>
       

           <div className='header-block'>
               <span>Product</span>
           </div>


            <div className='header-block'>
                <span>Description</span>
            </div>


            <div className='header-block'>
                <span>Quantity</span>
            </div>


            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
       </div>       

       { cartItems.map( item => (

           <CheckoutItem key= { item.id} cartItem = { item} />
       ))} 

       <div className='total'> TOTAL: ${total}</div>

        <div className='test-warning'>
            *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
        <StripeCheckoutButton price={total} />
    </div>
)}

const mapStateToProps = createStructuredSelector(
    {
        total: selectCartTotal
    }
)

export default connect(mapStateToProps)(CheckOutPage)