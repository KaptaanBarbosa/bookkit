import {
    createStore
} from 'redux';

// create the store
const initstate = {
    book: []
}
export const bookReducer = (state = initstate, action) => {
    switch (action.type) {
        case "POSTBOOK":
            console.log("ACTION and its type.....", action);

            return {
                book: [...state.book, ...action.payload]
            }
            case "DELBOOK":
                console.log("ACTION and its type.....", action);

                let books = state.book.filter(book => book.id !== action.payload.id);
                return books
            default:
                return state;
    }


}