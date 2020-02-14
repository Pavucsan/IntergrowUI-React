import React from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroupText, InputGroupAddon, Input, FormGroup  } from 'reactstrap';


class App extends React.Component{
  state = {
    newLoginModal:false,
    credencials: {username: '', password: ''},
  }
  login = () =>{
    console.log('login here')
    console.log(this.state.credencials);
    // use BE api to login

    // API from Backend
    // fetch('http://localhost:8000/auth', {
    //   method : 'POST',
    //   headers : {'Content-Type' : 'application/json'},
    //   body : JSON.stringify(this.state.credencials)
    // })
    // // 1st get the data as json
    // .then(data => data.json())
    // // use json data 'use token as authendication'
    // .then(data => {
    //   console.log(data.token);
    // })
    // .catch( e =>
    //   console.error(e)
    // )

  }
  loginToggle(){
    this.setState({
      newLoginModal:true,
    })
  }
  closeToggle(){
    this.setState({
      newLoginModal:false,
    })
  }
  inputChange = e =>{
    const cred = this.state.credencials;
    // target will set at onChange and find by name 
    cred[e.target.name] = e.target.value;
    this.setState({
      credencials:cred,
    })
  }
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

export default App;