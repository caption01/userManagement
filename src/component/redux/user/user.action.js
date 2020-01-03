import { userType } from './user.type'

export const setIntialUserData = (intialData) => ({
    type: userType.SET_INITIAL_USER_DATE,
    payload: intialData
})

export const setEditUserObj = (data) => ({
    type: userType.SET_EDIT_INFO_OBJ,
    payload: data
})

export const updateUserData = (data) => ({
    type: userType.UPDATE_USER_DATA,
    payload: data
})