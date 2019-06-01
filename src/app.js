import {
    createStore
} from 'redux';

// create the store
const store = createStore(reducer);

function reducer(state = {}, action) {
    switch (action.type) {
        case "POSTBOOK":
            return {
                books: [...state, ...action.payload]
            };
            break;
        case "DECREMENT":
            return action.payload;
            break;
    }


}

store.subscribe(() => {
    console.log("current state is :", store.getState().price);
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
        }
    ]
});

//create and dispatch the action

store.dispatch({
    type: "DELETEBOOK",
    payload: {
        id: 3
    }
});