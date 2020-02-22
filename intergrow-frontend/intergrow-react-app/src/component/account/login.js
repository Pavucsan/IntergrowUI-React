import React from 'react';
// import logo from './logo.svg';
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_AUTH_URL } from '../../constants/utill';
import { Redirect } from 'react-router';
import Home from '../core/home';
import { MDBContainer } from 'mdbreact';


class Login extends React.Component{
  state = {
    newLoginModal:true,
    credencials: {username: '', password: ''},
    redirect:false,
    isLoggedIn:true,
  }

  componentWillMount(){
    if(sessionStorage.getItem('userData')){
      console.log('call user feed');
    }
    else{
      this.setState({redirect:true})
    }
  }



  login = () =>{
    // console.log(this.state.credencials.username && this.state.credencials.password);
    
    console.log('login here')
    // use BE api to login
    if(this.state.credencials.username && this.state.credencials.password){
      // API from Backend
      fetch(COURSE_AUTH_URL, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(this.state.credencials)
      })
      // 1st get the data as json
      .then(data => data.json())
      // use json data 'use token as authendication'
      .then(data => {
        if(data.token == null){        
          console.error("Login faild!");   
          this.setState({
            newLoginModal:true
          })     
        }
        else{
          console.log("Login success");
          console.log(data.token);


          sessionStorage.setItem('userData',data);
          this.setState({
            redirect:true,
            isLoggedIn:true,
          })

          console.log('Home Page');
          this.setState({
            // newLoginModal:false,
            credencials: {username: '', password: ''},

          })
          
        }
      })
      .catch( e =>
        console.error(e)
      )
    }
    else{
      console.log('credencial empty');
    }
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
    // console.log(this.state);
    this.setState({
      credencials:cred,
    })
  }
  render(){

    // if(this.state.redirect){
    //   return(<Redirect to={'/login'}/>)
    // }
    if(sessionStorage.getItem('userData')){
      return(<Redirect to={'home/'}/>)
    }
    return (
      <div className="full">
        {/* <Button onClick={this.loginToggle.bind(this)}>Login</Button> */}
        {/* <Modal isOpen={this.state.newLoginModal} toggle={this.loginToggle.bind(this)}> */}
        {/* <Modal isOpen='true' toggle={this.loginToggle.bind(this)}> */}
        <MDBContainer className='card mt-4 w-25' >
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
          <a className='text-left ml-4 pb-2'>Forget password</a>
          <ModalFooter>
            <Button color="primary" rounded='true' onClick = {this.login}>Login</Button>
            {/* <Button color="danger" rounded='true'  onClick = {this.closeToggle.bind(this)} >Cancel</Button> */}
          </ModalFooter>
        {/* </Modal>    */}
        </MDBContainer>
      </div>
    );
  }

}

export default Login;
