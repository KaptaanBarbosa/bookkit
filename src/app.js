//create and dispatch the action
import {
    createStore,
    applyMiddleware
} from 'redux';
import {Provider} from 'react-redux'
import React from 'react';
import {render} from 'react-dom'
import logger from 'redux-logger';
import NavigationBar from './components/navigation/navigation'
import BooksListPage from './components/pages/BooksListPage'
import reducers from './reducers/index'
import Cart from './components/templates/Cart'
import {
    BrowserRouter as Router,
    Link,
    Route // for later
  } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);
    render( 
<Provider store = {store}>
    <Router history={createBrowserHistory()}>
    <NavigationBar/>
    <div>
      <Route exact path="/" component={BooksListPage}/>
        <Route path="/Home" component={() => <div>yo home page is coming homie!</div>} />

        <Route path="/Productlist" component={BooksListPage} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Checkout" component={() => <div>yo!</div>}  />
    </div>
  </Router>
</Provider>
,document.getElementById("app"));
// to eavesdrop of store affairs



//create and dispatch the action
