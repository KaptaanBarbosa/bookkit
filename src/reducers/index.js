"use strict"
import {
    combineReducers
} from 'redux';

import {
    bookReducer
} from './bookReducer'
// create the store
import {
    cartReducer
} from './cartReducers'
export default combineReducers({
    books: bookReducer,
    cart: cartReducer
})