const initState = {
    cart: [{
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
    }]
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADDTOCART_SUCCESS":
            console.log("ACTION cart reducer.....", action);
            const addedItem = [];
            addedItem.push(action.payload)
            console.log("ygygygyg",action.payload,state)
            return {cart:[...state.cart, ...[action.payload]]}
        default:
            return state;
    }

}