import { ErrorActionTypes } from './error.types';

export const addError = error => ({
    type: ErrorActionTypes.ADD_ERROR,
    payload: error
});

export const removeError = () => ({
    type: ErrorActionTypes.REMOVE_ERROR
});
