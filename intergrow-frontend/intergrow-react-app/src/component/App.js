import React from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroupText, InputGroupAddon, Input, FormGroup  } from 'reactstrap';


import Login from './account/login';
import RegisterUser from './account/register-user';

class App extends React.Component{
  
  render(){
    return (
      <Modal isOpen='true' style={{textAlignVertical: 'center'}}>
      <div className='text-center' style={{textAlignVertical: 'center'}}>
        
          <Login/>
          <RegisterUser/>
      
      </div>
      </Modal>
    );
  }

}

export default App;
