//create and dispatch the action
import {
    createStore
} from 'redux';

import reducers from './reducers/index'
const store = createStore(reducers);


// to eavesdrop of store affairs
store.subscribe(() => {
    console.log("current state is :", store.getState().book);
});


//create and dispatch the action

store.dispatch({
    type: "POSTBOOK",
    payload: [{
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
        }
    ]
});
store.dispatch({
    type: "DELBOOK",
    payload: {
        id: 3
    }
});

store.dispatch({
    type: "ADD_ITEM",
    payload: {
        id: 2,
        title: "Hari Putter aadhe khoon wala Rajkumar",
        description: "Hari Putter  pehli baar hugbhar ki duniya main kadam rakhta hai jaha uski tarah naye jadooii tamanche aate hai",
        price: "999.00"
    }
})
//create and dispatch the action