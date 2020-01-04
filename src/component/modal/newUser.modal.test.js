import React, {Component} from 'react';
import NewUserModal from './newUser.modal.component';
import { shallow } from 'enzyme'

describe('Testing NewUserModal', () => {

    it('expect render newUserModal', () => {

        const wrapper = shallow(<NewUserModal />)
        expect(wrapper).toMatchSnapshot()
    })

    it('testing handleOk function for null input', () => {
        const mockProps = {
            addNewUser: jest.fn(),
            setActiveModal: jest.fn() 
        }
        window.alert = jest.fn();
        const wrapper = shallow(<NewUserModal {...mockProps} />)

        wrapper.find('[id="inputfirstname"]').simulate('change', { target: { value: '' } })
        wrapper.find('[id="inputlastname"]').simulate('change', { target: { value: 'bombay_lastname' } })
        wrapper.find('[id="inputaddress"]').simulate('change', { target: { value: 'bombay_address' } })
        wrapper.instance().handleOk()
        expect(window.alert).toBeCalledWith('please full fill infomation')

        wrapper.find('[id="inputfirstname"]').simulate('change', { target: { value: 'bombay_firstname' } })
        wrapper.find('[id="inputlastname"]').simulate('change', { target: { value: '' } })
        wrapper.find('[id="inputaddress"]').simulate('change', { target: { value: 'bombay_address' } })
        wrapper.instance().handleOk()
        expect(window.alert).toBeCalledWith('please full fill infomation')

        wrapper.find('[id="inputfirstname"]').simulate('change', { target: { value: 'bombay_firstname' } })
        wrapper.find('[id="inputlastname"]').simulate('change', { target: { value: 'bombay_lastname' } })
        wrapper.find('[id="inputaddress"]').simulate('change', { target: { value: '' } })
        wrapper.instance().handleOk()
        expect(window.alert).toBeCalledWith('please full fill infomation')
    })
})