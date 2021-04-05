import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate }  from 'redux-persist/integration/react'
import { ApolloProvider } from 'react-apollo' 
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from  'apollo-boost'

import { store, persistor } from './redux/store'

import { typeDefs, resolvers } from './graphql/resolvers'

import './index.css';
import App from './App';

const link  = createHttpLink({

  uri: 'https://www.crwn-clothing.com'
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers

})

client.writeData({
  data: {

  cartHidden: true,
  cartItems: [],
  cartItemsCount: 0
}})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = { client}>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor = { persistor}>
          <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
