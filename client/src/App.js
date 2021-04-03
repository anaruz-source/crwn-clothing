import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';


import { createUserProfileDocument, auth } from './firebase/firebase.utils'
import CurrentUserContext from './contexts/current-user/current-user.context'


import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import CheckOutPage from './pages/checkout/checkout.component'







import './App.css';


class App extends React.Component {
 

constructor(){

  super()

  this.state = {

    currentUser: null
  }
}

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

render() {
 const { currentUser } = this.state
    return (
      <div>
        <CurrentUserContext.Provider value={currentUser}>
          <Header className='header' />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route path='/signin' render={() => currentUser ? (< Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>

      </div>
    )
  }

  
}



export default App
