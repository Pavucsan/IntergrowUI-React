import { MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem } from "mdbreact";
import React from "react";
import { Redirect } from "react-router";


class header extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      isLoggedIn:true,
      username:'',
      
    };

    this.logout = this.logout.bind(this);
  }
  logout(){
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    window.location.reload(false);
    this.setState({
      isLoggedIn:false,
    })
  }
  componentWillMount()
    {
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
            console.log(sessionStorage.getItem('userData').username);
        }
        else{
          this.setState({redirect:true, isLoggedIn:false,})
        }
    }

  toggleCollapse = () =>
  {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render()
  {
    let isLoggedIn = this.props.isLoggedIn;
    let button;

    if(isLoggedIn == true){
      button = <MDBDropdownItem href="/login"><MDBIcon icon="sign-in-alt" className="pr-2"/>Login</MDBDropdownItem>
    }else{
      button = <MDBDropdownItem onClick={this.logout}><MDBIcon icon="sign-out-alt" className="pr-2"/>Logout</MDBDropdownItem>
    }
    
    return (
      <MDBNavbar color="unique-color-dark" dark expand="md" className="fixed-top">
        <MDBNavbarBrand>
          <strong className="white-text"><a className="white-text h4-responsive font-weight-bold" href="/login"> Intergrow</a></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem className="pt-2 pl-5">
              <a className="white-text pt-5" href="/home">Dashboard</a>
            </MDBNavItem>
            <MDBNavItem className="pt-2 pl-3" nav caret> 
              <a className="white-text" href="/goals">Goal</a>
            </MDBNavItem>
            <MDBNavItem className="pt-2 pl-3" nav caret>
              <a className="white-text" href="/help">Help</a>
            </MDBNavItem>
            <MDBNavItem className="pl-3">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                 Profiles
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default white-text">
                  <MDBDropdownItem href="/employeelist/"><MDBIcon icon="eye" className="pr-2"/>Empoyee</MDBDropdownItem>
                  <MDBDropdownItem href="/team/"><MDBIcon icon="eye" className="pr-2"/>Team</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                 User {this.props.userLogin}<MDBIcon icon="user" className="pl-2"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/register">Register</MDBDropdownItem>
                  {button}
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default header;