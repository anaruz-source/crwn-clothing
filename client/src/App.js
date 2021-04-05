import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';


import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import CheckOutPage from './pages/checkout/checkout.component'
import { GlobalStyle } from './global.styles'


import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import { selectCurrentUser } from './redux/user/user.selectors'


import { checkUserSession } from './redux/user/user.actions'




const App = ({ checkUserSession, currentUser  }) =>{
 


  useEffect( () => {

    checkUserSession()
  }, [checkUserSession])


    return (
      <div>
        <GlobalStyle />
        <Header className='header'/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route path='/signin' render={() => currentUser ? (< Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>

      </div>
    );
  
}

const mapStateToProps =  createStructuredSelector ({
  
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch =>({

  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
