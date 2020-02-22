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
      <div className='text-center' style={{textAlignVertical: 'center'}}>
          <Login/>
      </div>
    );
  }

}

export default App;
