const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')
const compression = require('compression')

if(process.env.NODE_ENV != 'production')  require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express()

const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(compression())

if(process.env.NODE_ENV == 'production') {

    app.use( express.static(path.join(__dirname, 'client/build')))
}

app.get('*', function( req, resp) {

    resp.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    
})


app.listen(port, err => {

    if(err) throw err

    console.log('Node Server Running on '+ port)
})


app.post('/payment', function(req, resp){

    console.log('rcvd', req.body)
     const body = {

        source : req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeResp) => {

        if (stripeErr) {
            resp.status(500).send({ error: stripeErr })
        } else {
            resp.status(200).send({ success: stripeResp })
        }
    })
})