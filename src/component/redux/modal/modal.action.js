import { modalType } from './modal.type'

export const setActiveModal = (status) => ({
    type: modalType.SET_ACTIVE_MODAL,
    payload: status
})