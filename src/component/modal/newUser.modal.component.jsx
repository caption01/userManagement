import React from 'react'

// ant-design
import { Button, Modal, Input } from 'antd';


class NewUserModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          loading: false,
          first_name: '',
          last_name: '',
          address: '',
        }
    }

    handleOk = () => {

        const { first_name, last_name, address } = this.state
        const { addNewUser, setActiveModal } = this.props

        this.setState({ loading: true });
        let newObject = {
            key: new Date().toISOString(),
            first_name: first_name,
            last_name: last_name,
            address: address
        }
        addNewUser(newObject)
        setTimeout(() => {
            this.setState({ loading: false}, 
                ()=>{
                    setActiveModal(false)
                    this.setState({
                        first_name: '',
                        last_name: '',
                        address: ''
                    })
                });
        }, 1000);
    };
  
    handleCancel = () => {
        this.props.setActiveModal(false);
    };


    render(){

        const { loading, first_name, last_name, address } = this.state;

        return(
            <div className='edit-modal-container'>
                <Modal
                    visible={this.props.active}
                    title="Add New User"
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
                    <p>First_Name : <Input value={first_name} placeholder="insert your first name" onChange={(e)=>this.setState({first_name: e.target.value})} allowClear={true} /> </p>
                    <p>Last_Name : <Input value={last_name} placeholder="insert your last name" onChange={(e)=>this.setState({last_name: e.target.value})} allowClear={true} /> </p>
                    <p>Address : <Input value={address} placeholder="insert your address" onChange={(e)=>this.setState({address: e.target.value})} allowClear={true} /> </p>
                </Modal>
            </div>
        )
    }
}

export default NewUserModal