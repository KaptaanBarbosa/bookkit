const initState = {
    cart: []
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