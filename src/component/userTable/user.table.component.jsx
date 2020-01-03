import React from 'react'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setIntialUserData, setEditUserObj, updateUserData, addNewUser, deleteUser } from '../redux/user/user.action'
import { setActiveModal } from '../redux/modal/modal.action'

// selector
import { selectUserData, selectUserEditObject } from '../redux/user/user.selector'
import { selectModalStatus } from '../redux/modal/modal.selector'

// ant-design
import { Table, Divider, Button } from 'antd';

// seed-user-data
import { userSeedData } from '../redux/user/user.data'

// component
import EditModal from '../modal/edit.modal.component'
import NewUserModal from '../modal/newUser.modal.component'


class UserTable extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          selected_modal: ''
        }
    }

    handleModalSelect = (modal, record) => {
      this.props.setEditUserObj(record)
      this.props.setActiveModal(true)
      this.setState({
        selected_modal: modal
      })
    }

    handleDeleteUser = (record) => {
      this.props.deleteUser(record)
    }

    componentDidMount = () => {
      this.props.setIntialUserData(userSeedData)
    }

    render() {

      const columns = [
            {
              title: 'First Name',
              dataIndex: 'first_name',
              key: 'name'
            },
            {
              title: 'Last Name',
              dataIndex: 'last_name',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a onClick={()=>this.handleModalSelect('modal_edit', record)} >Edit</a>
                  <Divider type="vertical" />
                  <a onClick={()=>this.handleDeleteUser(record)} >Delete</a>
                </span>
              ),
            },
      ];

      const { userData, modalActive, setActiveModal, userEdit, setEditUserObj, updateUserData, addNewUser } = this.props
          
      return (

            <div className='user-table-container'>
              <div className='user-table-add-button'>
                <Button type="primary" onClick={()=>this.handleModalSelect('modal_newUser')}>Add new User</Button>
              </div>
              <div className='user-table'>
                <Table columns={columns} dataSource={userData} />
              </div>

              {
                this.state.selected_modal === 'modal_edit' ? 
                <EditModal 
                  active={modalActive} 
                  setActiveModal={setActiveModal} 
                  userInfo={userEdit}
                  setEditUserObj={setEditUserObj}
                  updateUserData={updateUserData}
                  userData={userData}
                /> :
                this.state.selected_modal === 'modal_newUser' ?
                <NewUserModal 
                  active={modalActive} 
                  setActiveModal={setActiveModal}
                  userData={userData}
                  addNewUser={addNewUser}
                /> :
                null
              }
              


            </div>
      )
    }
}


const mapStateToProps = createStructuredSelector({
  userData: selectUserData,
  modalActive: selectModalStatus,
  userEdit: selectUserEditObject
})

const mapDispatchToPtops = dispatch => ({
  setIntialUserData: (data) => dispatch(setIntialUserData(data)),
  setActiveModal: (status) => dispatch(setActiveModal(status)),
  setEditUserObj: (data) => dispatch(setEditUserObj(data)),
  updateUserData: (data) => dispatch(updateUserData(data)),
  addNewUser: (data) => dispatch(addNewUser(data)),
  deleteUser: (target) => dispatch(deleteUser(target))
})


export default connect(mapStateToProps, mapDispatchToPtops)(UserTable)