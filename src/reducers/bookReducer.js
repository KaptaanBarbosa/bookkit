import {
    createStore
} from 'redux';

// create the store
const initstate = {
    books:[{
            id: 3,
            title: "Hari Putter aur azkabaan k kaidi",
            description: "Hari Putter k saamne khulne wala hai ek raaz, uske pita ka khooni unka apna langotiya yaar",
            price: "599.00"
        },
        {
            id: 1,
            title: "Hari Putter aur paras paththar",
            description: "Hari Putter  pehli baar hugbhar ki duniya main kadam rakhta hai jaha uski tarah naye jadooii tamanche aate hai",
            price: "999.00"
        },
        {
            id: 2,
            title: "Hari Putter aadhe khoon wala Rajkumar",
            description: "Hari Putter  pehli baar hugbhar ki duniya main kadam rakhta hai jaha uski tarah naye jadooii tamanche aate hai",
            price: "999.00"
        },
        {
            id: 56,
            title: "Hari Putter aadhe khoon wala Rajkumar",
            description: "Hari Putter  pehli baar hugbhar ki duniya main kadam rakhta hai jaha uski tarah naye jadooii tamanche aate hai",
            price: "999.00"
        },
        {
            id: 546,
            title: "Hari Putter aadhe khoon wala Rajkumar",
            description: "Hari Putter  pehli baar hugbhar ki duniya main kadam rakhta hai jaha uski tarah naye jadooii tamanche aate hai",
            price: "999.00"
        }
    ],
    showaddbooks:false
}
export const bookReducer = (state = initstate, action) => {
    console.log("ACTION",action);
    switch (action.type) {
        case "FETCHBOOK":
            return state
        case "FETCHBOOK_SUCCESS":
            return {
                books: [...state.books, ...action.payload]
            }
        case "FETCHBOOK_FAILURE":
            return {
                books:action.payload
            }
        case "DELBOOK":
            let books = state.books.filter(book => book.id !== action.payload.id);
            return {
                books: books
            }
        case "ADDBOOKS":
            console.log("add books ---->>>>",action.payload,state.books);
            let newBooks = JSON.parse(JSON.stringify(state.books))
            console.log("New Books ::: \n",newBooks);
            newBooks.push(action.payload);
            return{
               books:newBooks
            }  
        case "SHOWADDBOOKS":
            const newState = JSON.parse(JSON.stringify(state));
            newState.showaddbooks=action.payload;
            return newState;   
        default:
            return state;
    }


}