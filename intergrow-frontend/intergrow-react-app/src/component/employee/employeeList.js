import axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdbreact';
import React from "react";
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_API_URL } from '../../constants/utill';
import CreateEmployee from './sections/createEmployee';
import EmployeeHeader from './sections/employeeHeader';
import Axios from 'axios';


// const COURSE_API_URL = 'http://localhost:8000/';

class EmployeeList extends React.Component {
    state = {
        employees: [],  
    }
// Initial stage
    componentWillMount()
    {
        this._refreshEmployee();
    }
    _refreshEmployee()
    {
        axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            });
            console.log(this.state.employees);
        });
    }
// End
        
    removeEmployee(id){
        Axios.delete(COURSE_API_URL +  `employee/${id}`).then((response) =>{
            console.log(response.data);
        })
    }


    render()
    {
            let employeeRaw = this.state.employees.map((employee) =>
            {    
                return (
                    <tr key={employee.id}>
                        {/* contenteditable="true" */}
                        <td className="pt-3-half" >{employee.employee_id}</td>
                        <td className="pt-3-half" >{employee.first_name}</td>
                        <td className="pt-3-half" >{employee.email}</td>
                        <td className="pt-3-half" >{employee.phone_number}</td>
                        <td className="pt-3-half">
                           <span className="table-remove"><button type="button"
                                className="btn btn-warning btn-rounded btn-sm my-0">Edit</button></span>
                        </td>
                        <td>
                            <span className="table-remove"><button type="button"
                                className="btn btn-danger btn-rounded btn-sm my-0" onClick={this.removeEmployee(employee.id)}>Remove</button></span>
                        </td>
                    </tr>
                )
            });
    

        return (

            <div>
                <section class="card aqua-gradient wow fadeIn">
                    <EmployeeHeader/>
                </section>
                    
                <section>
                    <CreateEmployee/>                      
                </section>  

                    <div class="container px-5">
                    <section>
                        <MDBContainer className="card">
                            <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Employees</h3>
                            <div className="card-body">
                                <div id="table" className="table-editable">                           
                                    <table className="table table-bordered table-responsive-md table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Employee Id</th>
                                                <th className="text-center">Name</th>
                                                <th className="text-center">Email</th>
                                                <th className="text-center">Phone No.</th>
                                                <th className="text-center">Edit</th>
                                                <th className="text-center">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {employeeRaw}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </MDBContainer>                     
                    </section> 
                </div>
            </div>

        );
    }
}
export default EmployeeList;



