import React, {Component} from 'react';
import UserTable from './user.table.component';
import { shallow } from 'enzyme'

describe('Testing UserTable component', () => {

  it('expect to render UserTable', () => {
    const wrapper = shallow(<UserTable />)
    expect(wrapper).toMatchSnapshot()
  })

  it('testing handleModalSelect to set selected modal state correctly', () => {

    const mockProps = {
      setEditUserObj: jest.fn(),
      setActiveModal: jest.fn(),
    }
    const mockData = {
      key: '10',
      first_name: 'john',
      last_name: 'mayer',
      address: 'USA'
    }
    const wrapper = shallow(<UserTable {...mockProps} />)

    wrapper.instance().handleModalSelect('modal_edit', mockData)
    expect(wrapper.state().selected_modal).toEqual("modal_edit")

    wrapper.instance().handleModalSelect('modal_new_user', mockData)
    expect(wrapper.state().selected_modal).toEqual("modal_new_user")

  })

})

