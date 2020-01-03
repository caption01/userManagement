import React from 'react'


// ant-design
import { Button, Modal, Input } from 'antd';


class EditModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          loading: false
        }
    }

    handleOk = () => {
      this.setState({ loading: true });
      const userDataUpdate = this.props.userData.map(user => user.key === this.props.userInfo.key ? this.props.userInfo : user)
      this.props.updateUserData(userDataUpdate)
      setTimeout(() => {
        this.setState({ loading: false}, 
            ()=>{
                this.props.setActiveModal(false)
            });
      }, 1000);
    };
  
    handleCancel = () => {
        this.props.setActiveModal(false);
    };

    handleInputChange = (type, load) => {
        switch (type) {
            case 'first_name':
                return this.props.setEditUserObj({...this.props.userInfo, first_name: load})

            case 'last_name':
                return this.props.setEditUserObj({...this.props.userInfo, last_name: load})

            case 'address':
                return this.props.setEditUserObj({...this.props.userInfo, address: load})

            default:
                return true;
        }

    }

    render(){

        const { loading } = this.state;

        console.log(this.props.userInfo)

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
                    <p>First_Name : <Input value={this.props.userInfo.first_name} onChange={(e)=>this.handleInputChange('first_name',e.target.value)} allowClear={true} /> </p>
                    <p>Last_Name : <Input value={this.props.userInfo.last_name} onChange={(e)=>this.handleInputChange('last_name', e.target.value)} allowClear={true} /> </p>
                    <p>Address : <Input value={this.props.userInfo.address} onChange={(e)=>this.handleInputChange('address', e.target.value)} allowClear={true} /> </p>
                    
                </Modal>
            </div>
        )
    }
}

export default EditModal