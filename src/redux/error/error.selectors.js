import { createSelector } from 'reselect';

const selectError = state => state.error;

export const selectErrorMsg = createSelector(
    [selectError],
    error => error.error
)