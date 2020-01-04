import React, {Component} from 'react';
import EditModal from './edit.modal.component';
import { shallow } from 'enzyme'

describe('Testing EditModal', () => {

    let wrapper ;
    beforeEach(() => {
        const mockProps = {
            userData: [],
            userInfo: {
                key: '10',
                first_name: 'john',
                last_name: 'mayer',
                address: 'USA'
            },
            updateUserData: jest.fn(),
            setActiveModal: jest.fn()
        }
        wrapper = shallow(<EditModal {...mockProps} />)
    })

    it('expect render EditModal', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('testing handleOk function for null userInfo props', () => {
        const mockPropsNullFirstName = {
            userData: [],
            userInfo: {
                key: '10',
                first_name: '',
                last_name: 'mayer',
                address: 'USA'
            },
            updateUserData: jest.fn(),
            setActiveModal: jest.fn()
        }

        window.alert = jest.fn();

        const wrapperCaseFirsName = shallow(<EditModal {...mockPropsNullFirstName} />)
        wrapperCaseFirsName.instance().handleOk()
        expect(window.alert).toBeCalledWith('please full fill infomation')

        const mockPropsNullLastName = {
            userData: [],
            userInfo: {
                key: '10',
                first_name: '',
                last_name: 'mayer',
                address: 'USA'
            },
            updateUserData: jest.fn(),
            setActiveModal: jest.fn()
        }

        const wrapperCaseLastName = shallow(<EditModal {...mockPropsNullLastName} />)
        wrapperCaseLastName.instance().handleOk()
        expect(window.alert).toBeCalledWith('please full fill infomation')


        const mockPropsNullAddress = {
            userData: [],
            userInfo: {
                key: '10',
                first_name: '',
                last_name: 'mayer',
                address: 'USA'
            },
            updateUserData: jest.fn(),
            setActiveModal: jest.fn()
        }

        const wrapperCaseAddress = shallow(<EditModal {...mockPropsNullAddress} />)
        wrapperCaseAddress.instance().handleOk()
        expect(window.alert).toBeCalledWith('please full fill infomation')
    })
})