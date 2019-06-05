//create and dispatch the action
import {
    createStore,
    applyMiddleware
} from 'redux';
import {Provider} from 'react-redux'
import React from 'react';
import {render} from 'react-dom'
import logger from 'redux-logger';

import BooksList from './components/pages/booksList'
import reducers from './reducers/index'

const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);
    render( 
<Provider store = {store}>
    <BooksList/>
</Provider>
,document.getElementById("app"));
// to eavesdrop of store affairs



//create and dispatch the action
