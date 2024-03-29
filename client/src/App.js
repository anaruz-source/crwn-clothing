import React, { useEffect, lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';


import Header from './components/header/header.component'
import { GlobalStyle } from './global.styles'


import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import { selectCurrentUser } from './redux/user/user.selectors'


import { checkUserSession } from './redux/user/user.actions'
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckOutPage = lazy(() => import('./pages/checkout/checkout.component'))


const App = ({ checkUserSession, currentUser  }) =>{
 


  useEffect( () => {

    checkUserSession()
  }, [checkUserSession])


    return (
      <div>
        <GlobalStyle />
        <Header className='header'/>
        <Switch>
          <ErrorBoundary>
          <Suspense fallback = { <Spinner /> }>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route path='/signin' render={() => currentUser ? (< Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          </Suspense>
          </ErrorBoundary>
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
