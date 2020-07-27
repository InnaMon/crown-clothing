import { ErrorActionTypes } from './error.types';

const INITIAL_STATE = {
    error: ''
}

const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ErrorActionTypes.ADD_ERROR :
            return {
                ...state,
                error: action.payload
            };
        case ErrorActionTypes.REMOVE_ERROR :
            return {
                ...state,
                error: ''
            };
        default: 
            return state
    }
}

export default errorReducer;