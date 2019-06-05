

export  const deletetebook = () => ({
    type: "DELBOOK",
    payload: {
        id: 3
    }
});

export const fetchbooksuccess = () => ({
    type: "FETCHBOOK_SUCCESS",
    payload: [{
        id: 2000,
        title: "Narnia: Sher,Dayan aur Alamari !!!",
        description: "teen chilgoze narnia ki jadoii duniya main rakhenge aur machega tehelka",
        price: "999.00"
    }]
})

export const fetchbookfailure = () => ({
    type: "FETCHBOOK_FAILURE",
    payload: {
      "ERROR":"Something went terribly wrong :( :("
    }
})

export const fetchbook = () => ({
    type: "FETCHBOOK"
});