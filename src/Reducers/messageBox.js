import { MESSAGE_CHANGE } from '../Constants/ActionType';

const initialState = {
    message: "Subscriber to CodersTea"
}

const messageBox = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === MESSAGE_CHANGE){
        return {...state, message: action.payload.message}
    }
    return newState;
}

export default messageBox;