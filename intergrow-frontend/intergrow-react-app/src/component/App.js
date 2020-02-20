import React from 'react';
import { Modal } from 'reactstrap';
// import logo from './logo.svg';
import '../css/App.css';
import Login from './account/login';
import RegisterUser from './account/register-user';
import Home from './core/home';


import {Route,Switch} from 'react-router-dom';


class App extends React.Component{
  
  render(){
    return (
      // <Modal isOpen='true' style={{textAlignVertical: 'center'}}>
      <div className='text-center' style={{textAlignVertical: 'center'}}>
        
          <Login/>
          {/* <RegisterUser/> */}
          <Home/>
      
      </div>
      // </Modal>
    );
  }

}

export default App;
