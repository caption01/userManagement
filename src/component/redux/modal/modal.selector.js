import { createSelector } from 'reselect'

const selectModalState = state => state.modal 

export const selectModalStatus = createSelector(
    [selectModalState],
    modalObject => modalObject.active
)