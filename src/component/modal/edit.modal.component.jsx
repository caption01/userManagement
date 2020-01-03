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

        const {userData, userInfo, updateUserData, setActiveModal } = this.props

        this.setState({ loading: true });
        const userDataUpdate = userData.map(user => user.key === userInfo.key ? userInfo : user)
        updateUserData(userDataUpdate)
        setTimeout(() => {
            this.setState({ loading: false}, 
                ()=>{
                    setActiveModal(false)
                });
        }, 1000);
    };
  
    handleCancel = () => {
        this.props.setActiveModal(false);
    };

    handleInputChange = (type, load) => {

        const { setEditUserObj, userInfo} = this.props

        switch (type) {
            case 'first_name':
                return setEditUserObj({...userInfo, first_name: load})

            case 'last_name':
                return setEditUserObj({...userInfo, last_name: load})

            case 'address':
                return setEditUserObj({...userInfo, address: load})

            default:
                return true;
        }

    }

    render(){

        const { loading } = this.state;

        const { active, userInfo, } = this.props

        return(
            <div className='edit-modal-container'>
                <Modal
                    visible={active}
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
                    <p>First_Name : <Input value={userInfo.first_name} onChange={(e)=>this.handleInputChange('first_name',e.target.value)} allowClear={true} /> </p>
                    <p>Last_Name : <Input value={userInfo.last_name} onChange={(e)=>this.handleInputChange('last_name', e.target.value)} allowClear={true} /> </p>
                    <p>Address : <Input value={userInfo.address} onChange={(e)=>this.handleInputChange('address', e.target.value)} allowClear={true} /> </p>
                    
                </Modal>
            </div>
        )
    }
}

export default EditModal