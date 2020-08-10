import { NEW_MESSAGE } from './types';

// our initial state - STORE of data
export const initialState = { messages: [] };

// main reducer function takes state & action objects
// with reducer, we need to return new object every time
const reducer = (state, action) => {
    switch(action.type) {
        case NEW_MESSAGE:
            // new array of objects with current state in STORE
            return { ...state, messages: [...state.messages, action.item] }; 
        default:
            return state;
    }
}

export default reducer;