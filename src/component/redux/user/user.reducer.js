import { userType } from './user.type'

const INT_STATE = {
    data: null,
    edit: {}
}


const userReducer = (state=INT_STATE, action) => {

    switch(action.type){

        case(userType.SET_INITIAL_USER_DATE):
            return {
                ...state,
                data: action.payload
            }

        case(userType.SET_EDIT_INFO_OBJ):
            return {
                ...state,
                edit: action.payload
            }
        
        case(userType.UPDATE_USER_DATA):
            return {
                ...state,
                data: action.payload
            }

        case(userType.ADD_NEW_USER):
            return {
                ...state,
                data: [...state.data, action.payload]
            }

        case(userType.DELETE_USER):
            return {
                ...state,
                data: state.data.filter(user => user.key!==action.payload.key ? user: false)
            }
            

        default:
            return state
    }
}

export default userReducer