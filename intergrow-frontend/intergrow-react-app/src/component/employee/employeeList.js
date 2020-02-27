import axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdbreact';
import React from "react";
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_API_URL, TITLE_COLOR } from '../../constants/utill';
import CreateEmployee from './sections/createEmployee';
import EmployeeHeader from './sections/employeeHeader';
import Axios from 'axios';
import { Redirect } from 'react-router';
import EmployeeTableView from './sections/employeeTableView';
import EmpTab from './sections/employeeTable/empTab';


// const COURSE_API_URL = 'http://localhost:8000/';

class EmployeeList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees: [],  
            redirect:false,
        }
    }

    
// Initial stage
    componentWillMount()
    {
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
          }
          else{
            this.setState({redirect:true})
          }

        this._refreshEmployee();
    }
    _refreshEmployee()
    {
        axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            });
            // console.log(this.state.employees);
        });
    }
// End    
    render()
    {
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }

        return (

            <div>
                <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                    <EmployeeHeader/>
                </section>              
                    
                <div className="container ">
                    {/* <EmployeeTableView employees={this.state.employees}/> */}
                    <EmpTab/>
                    <CreateEmployee/>
                </div>
            </div>

        );
    }
}
export default EmployeeList;



