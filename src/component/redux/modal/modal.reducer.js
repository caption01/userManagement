import { modalType } from './modal.type'

const INTIAL_STATE = {
    active: false
}


const modalReducer = (state=INTIAL_STATE, action) => {

    switch(action.type) {

        case(modalType.SET_ACTIVE_MODAL):
            return {
                ...state,
                active: action.payload
            }

        default:
            return state
    }
}

export default modalReducer