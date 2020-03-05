import React from 'react';
// import logo from './logo.svg';
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_AUTH_URL, TITLE_COLOR } from '../../constants/utill';
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
      // console.log('call user feed');
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
          // console.log("Login success");
          // console.log(data);
          window.location.reload();

          sessionStorage.setItem('userData',data);
          sessionStorage.setItem('username',this.state.credencials.username);
          this.setState({
            redirect:true,
            isLoggedIn:true,
          })
          

          console.log(sessionStorage.setItem('userData',data));
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
      <div className="py-5">
        {/* <Button onClick={this.loginToggle.bind(this)}>Login</Button> */}
        {/* <Modal isOpen={this.state.newLoginModal} toggle={this.loginToggle.bind(this)}> */}
        {/* <Modal isOpen='true' toggle={this.loginToggle.bind(this)}> */}
        <MDBContainer className={'card align-items-center col-xl-4 col-md-6  z-depth-3 text-white-50'+ TITLE_COLOR} >
          <ModalHeader onClick = {this.loginToggle.bind(this)} className='text-white text-uppercase'><strong>Login</strong></ModalHeader>
            <ModalBody>
            <FormGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="fas fa-user mr-2" ></i>
                    <Input placeholder="User Name"
                    name='username'
                     value={this.state.credencials.username}
                     onChange={this.inputChange}
                    /></InputGroupText>
                </InputGroupAddon>
            </FormGroup>   
            <FormGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="fas fa-key mr-2" ></i>
                    <Input type='password' placeholder="Password" 
                    name = 'password'
                    value={this.state.credencials.password}
                    onChange={this.inputChange}
                    /></InputGroupText>
                </InputGroupAddon>
            </FormGroup> 
            <small>
          <a className='text-left pb-2 zoom text-white-50'>forget password</a>
          </small>  
          </ModalBody>
          {/* <ModalFooter> */}
            <Button color="primary" rounded='true' onClick = {this.login} className='mb-2'>Login</Button>
            {/* <Button color="danger" rounded='true'  onClick = {this.closeToggle.bind(this)} >Cancel</Button> */}
          {/* </ModalFooter> */}
        {/* </Modal>    */}
        </MDBContainer>
      </div>
    );
  }

}

export default Login;
