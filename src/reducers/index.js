"use strict"
import {
    combineReducers
} from 'redux';

import {
    bookReducer
} from './bookReducer'
// create the store
import {
    bookReducer
} from './cartReducers'
export default combineReducers({
    book: bookReducer,
    cart: cartReducer
})