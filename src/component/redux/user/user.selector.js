import { createSelector } from 'reselect'

const userState = state => state.user

export const selectUserData = createSelector(
    [userState],
    userObject => userObject.data
)

export const selectUserEditObject = createSelector(
    [userState],
    userObject => userObject.edit
)
