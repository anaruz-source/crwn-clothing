import React from 'react'
import  StripeCheckout  from 'react-stripe-checkout'
import axios from 'axios'



const StripeCheckoutButton = ( { price } ) => {

    const priceForStripe = price * 100

    const publishableKey = 'pk_test_51IUDqpL9zi6mNXtnehXcctyHUK9sRqmRQQeAokZkaLMPCUVv3hsefRBRR0w2aV0eTAT4aFZSoDukgtNIK8GV2Voh00lcuhfv5E'


    const onToken = token => {

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
                console.log('succesful payment :', response);
            })
            .catch(error => {
                console.log('Payment Error: ', error);
      
            });
}


return (<StripeCheckout
    
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    
    />)
}

export default StripeCheckoutButton