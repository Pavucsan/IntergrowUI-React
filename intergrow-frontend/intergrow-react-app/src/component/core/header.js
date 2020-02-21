import { MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem } from "mdbreact";
import React from "react";


class header extends React.Component
{
  state = {
    isOpen: false
  };

  toggleCollapse = () =>
  {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render()
  {
    return (
      <MDBNavbar color="unique-color-dark" dark expand="md" className="fixed-top">
        <MDBNavbarBrand>
          <strong className="white-text"><a className="white-text h4-responsive font-weight-bold" href="/"> Intergrow</a></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem className="pt-2 pl-5">
              <a className="white-text pt-5" href="/home">Home</a>
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
                 User <MDBIcon icon="user" className="pl-2"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/register">Register</MDBDropdownItem>
                  <MDBDropdownItem href="/login"><MDBIcon icon="sign-in-alt" className="pr-2"/>Login</MDBDropdownItem>
                  <MDBDropdownItem href="/logout"><MDBIcon icon="sign-out-alt" className="pr-2"/>Logout</MDBDropdownItem>
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