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
      this.setState({ loading: true });
      let newObject = {
          key: `${this.props.userData.length + 1}`,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address: this.state.address
      }
      this.props.addNewUser(newObject)
      setTimeout(() => {
        this.setState({ loading: false}, 
            ()=>{
                this.props.setActiveModal(false)
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

    componentWillReceiveProps = () => {
        console.log('will recieve')
    }

    render(){

        const { loading } = this.state;

        console.log(this.state)

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
                    <p>First_Name : <Input value={this.state.first_name} placeholder="insert your first name" onChange={(e)=>this.setState({first_name: e.target.value})} allowClear={true} /> </p>
                    <p>Last_Name : <Input value={this.state.last_name} placeholder="insert your last name" onChange={(e)=>this.setState({last_name: e.target.value})} allowClear={true} /> </p>
                    <p>Address : <Input value={this.state.address} placeholder="insert your address" onChange={(e)=>this.setState({address: e.target.value})} allowClear={true} /> </p>
                </Modal>
            </div>
        )
    }
}

export default NewUserModal