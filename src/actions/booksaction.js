const createIds = (data) =>{
    const bookdata =  data || [{
        id: 2000,
        title: "Narnia: Sher,Dayan aur Alamari !!!",
        description: "teen chilgoze narnia ki jadoii duniya main rakhenge aur machega tehelka",
        price: "999.00"
    }];
    bookdata.id = Math.random(10,1000);
    return bookdata;
}

export  const deletetebook = () => ({
    type: "DELBOOK",
    payload: {
        id: 3
    }
});

export const fetchbooksuccess = (data) => ({
    type: "FETCHBOOK_SUCCESS",
    payload: createIds(data)
})

export const fetchbookfailure = () => ({
    type: "FETCHBOOK_FAILURE",
    payload: {
      "ERROR":"Something went terribly wrong :( :("
    }
})

export const addbooks = (data) => ({
    type: "ADDBOOKS",
    payload: createIds(data)
})

export const showaddbooks = (data) => ({
    type: "SHOWADDBOOKS",
    payload: data
})

export const fetchbook = () => ({
    type: "FETCHBOOK"
});