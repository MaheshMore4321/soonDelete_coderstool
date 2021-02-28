const initialState = {
    message: "Subscriber to CodersTea"
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === "MessageChange"){
        return {...state, message: "Thanks you to subscribing"}
    }
    return newState;
}

export default reducer;