const createIds = (data) =>{
    const bookdata =  data || {
        id: 2000,
        title: "Narnia: Sher,Dayan aur Alamari !!!",
        description: "teen chilgoze narnia ki jadoii duniya main rakhenge aur machega tehelka",
        price: "999.00"
    };
    return bookdata;
}

export const addtocartsuccess = (data) => ({
    type: "ADDTOCART_SUCCESS",
    payload: createIds(data)
})

export const addtocartfailure = () => ({
    type: "ADDTOCART_FAILURE",
    payload: {
      "ERROR":"Something went terribly wrong :( :("
    }
})

export const deleteItemFromCart = () => ({
    type: "DELETETOCART"
});

export const deleteItemFromCartSuccess = (data) => ({
    type: "DELETETOCART_SUCCESS",
    payload: data.payload
})

export const deleteItemFromCartFailure = () => ({
    type: "DELETETOCART_FAILURE",
    payload: {
      "ERROR":"Something went terribly wrong :( :("
    }
})

