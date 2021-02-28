import { MESSAGE_CHANGE } from '../Constants/ActionType';

export const messageChange = message => ({
    type: MESSAGE_CHANGE,
    payload: {
        message
    }
});