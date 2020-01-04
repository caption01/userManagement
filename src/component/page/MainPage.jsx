import React from 'react'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setIntialUserData, setEditUserObj, updateUserData, addNewUser, deleteUser } from '../redux/user/user.action'
import { setActiveModal } from '../redux/modal/modal.action'

// selector
import { selectUserData, selectUserEditObject } from '../redux/user/user.selector'
import { selectModalStatus } from '../redux/modal/modal.selector'

// seed-user-data
import { userSeedData } from '../redux/user/user.data'
import UserTable from '../userTable/user.table.component'


class MainPage extends React.Component {

    componentDidMount = () => {
      this.props.setIntialUserData(userSeedData)
    }

    render() {
      return (
        <UserTable {...this.props } />
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


export default connect(mapStateToProps, mapDispatchToPtops)(MainPage)