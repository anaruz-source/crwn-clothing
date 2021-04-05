import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';


import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import { default as Header } from './components/header/header.container'
import CheckOutPage from './pages/checkout/checkout.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


import {setCurrentUser} from './redux/user/user.actions'
import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import { selectCurrentUser } from './redux/user/user.selectors'

import './App.css';


class App extends React.Component {
 

  unsubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser, collectionsArray} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    
     
     if(userAuth) { 
       
    

       const userRef = await createUserProfileDocument(userAuth)

       userRef.onSnapshot(snap => {

         setCurrentUser({

             id: snap.id,
             ...snap.data()
           
         })
       })
    } 

      setCurrentUser(userAuth)

    })

  }

  componentWillUnmount() {

    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header className='header'/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route path='/signin' render={() => this.props.currentUser ? (< Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>

      </div>
    );
  }
}

const mapStateToProps =  createStructuredSelector ({
  
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})
const mapDispatchToProps = dispatch => ({

  setCurrentUser : user => dispatch( setCurrentUser(user))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
