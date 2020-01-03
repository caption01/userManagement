import React from 'react'


// ant-design
import { Button, Modal, Input } from 'antd';


class EditModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          loading: false,
          first_name: this.props.userInfo.first_name,
          last_name: this.props.userInfo.last_name,
          address: this.props.userInfo.address,
          key: this.props.userInfo.key
        }
    }

    handleOk = () => {
      this.setState({ loading: true });
      let editObject = {
          key: this.state.key,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address: this.state.address
      }
      const userDataUpdate = this.props.userData.map(user => user.key === editObject.key ? editObject : user)
      this.props.updateUserData(userDataUpdate)
      setTimeout(() => {
        this.setState({ loading: false}, ()=>this.props.setActiveModal(false));
      }, 1000);
    };
  
    handleCancel = () => {
        this.props.setActiveModal(false);
    };

    render(){

        const { loading } = this.state;

        return(
            <div className='edit-modal-container'>
                <Modal
                    visible={this.props.active}
                    title="Edit User Infomation"
                    onOk={()=>this.handleOk()}
                    onCancel={()=>this.handleCancel()}
                    footer={[
                    <Button key="back" onClick={()=>this.handleCancel()}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={()=>this.handleOk()}>
                        Submit
                    </Button>,
                    ]}
                >
                    <p>First_Name : <Input placeholder={this.props.userInfo.first_name} onChange={(e)=>this.setState({first_name: e.target.value})} /> </p>
                    <p>Last_Name : <Input placeholder={this.props.userInfo.last_name} onChange={(e)=>this.setState({last_name: e.target.value})} /> </p>
                    <p>Address : <Input placeholder={this.props.userInfo.address} onChange={(e)=>this.setState({address: e.target.value})} /> </p>
                </Modal>
            </div>
        )
    }
}

export default EditModal