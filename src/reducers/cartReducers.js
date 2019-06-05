const initState = {
    cart: []
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log("ACTION cart reducer.....", action);
            const addedItem = [action.payload];
            return [...state.cart, ...addedItem]
        default:
            return state;
    }

}