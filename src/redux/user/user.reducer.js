import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                console: console.log('userReducer state', state, action.payload)
            }          
        default: 
            return state;
    }
}

export default userReducer;

//in the return statement, you create a new empty obj, assign to it the ild/current state, and then 
// assign to it the action.payload which OVERWRITES same keys because it is a later source 