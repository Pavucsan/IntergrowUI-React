import React from 'react';

class RegisterUser extends React.Component{
    render(){
        return (
            <div className="App full">
            <Button onClick={this.loginToggle.bind(this)}>Login</Button>
            <Modal isOpen={this.state.newLoginModal} toggle={this.loginToggle.bind(this)}>
                <ModalHeader onClick = {this.loginToggle.bind(this)}>Login User</ModalHeader>
                <ModalBody>
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                        <Input placeholder="User Name"
                        name='username'
                        value={this.state.credencials.username}
                        onChange={this.inputChange}
                        />
                    </InputGroupAddon>
                </FormGroup>   
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-users mr-2" ></i></InputGroupText>
                        <Input type='password' placeholder="Password" 
                        name = 'password'
                        value={this.state.credencials.password}
                        onChange={this.inputChange}
                        />
                    </InputGroupAddon>
                </FormGroup>   
                </ModalBody>
                <ModalFooter>
                <Button color="primary" rounded='true' onClick = {this.login}>Login</Button>
                <Button color="danger" rounded='true'  onClick = {this.closeToggle.bind(this)} >Cancel</Button>
                </ModalFooter>
            </Modal>   
            </div>
        );
    }
}
export default RegisterUser;