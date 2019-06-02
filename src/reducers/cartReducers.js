const initState = {
    cart: []
}

const cartReducer = () => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log("ACTION and its type.....", action);

            return {
                cart: [...state.cart, ...action.payload]
            }

            default:
                return state;
    }

}