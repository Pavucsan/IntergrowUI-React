import React from "react";
import { MDBBtn, MDBContainer, } from 'mdbreact';
import axios from 'axios';
import { Modal, Table, Button, ModalHeader, ModalBody, ModalFooter, InputGroup, Label, InputGroupText, InputGroupAddon, Input, FormGroup } from 'reactstrap';



const COURSE_API_URL = 'http://localhost:8000/';

class EmployeeList extends React.Component {
    constructor()
    {
        super();
    }
    state = {
        employees: [],          
        newEmployeeData:{
            employee_id: '',
            full_name:'',
            first_name:'',
            last_name:'',
            email:'',
            phone_number:'',
            address:''
        },
        newEmployeeModal:false,
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

// add new employee
    toggleNewEmployee(){
        this.setState({
            newEmployeeModal:true
        })
    }
    addEmployee()
    {
            this.setState.newEmployeeData.full_name = this.state.newEmployeeData.first_name + " " + this.state.newEmployeeData.last_name;
       
        axios.post(COURSE_API_URL + 'employees/', this.state.newEmployeeData).then((response)=>{

            console.log(response.data);
            let {employees} = this.state;
            employees.push(response.data);

            this.setState({
                newEmployeeModal:false,
                employees,

                employee_id: '',
                full_name:'',
                first_name:'',
                last_name:'',
                email:'',
                phone_number:'',
                address:''
            });
        });
    }    
// Add employee finished

// Close
closeToggle(){
    this.setState({
        newEmployeeModal:false
    })
}
// close end


    render()
    {
            let employeeRaw = this.state.employees.map((employee) =>
            {    
                return (
                    <tr key={employee.employee_id}>
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
                                className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                        </td>
                    </tr>
                )
            });
    

        return (

            <main class="">
                <section class="card aqua-gradient wow fadeIn">

                    {/* <!-- Content --> */}
                    <div class="card-body text-white text-center py-1 px-8 my-3 text-uppercase">

                        <h1 class="mb-4">
                            <strong>Intergrow Emloyees</strong>
                        </h1>
                        <p>
                            <strong>Join with intergrow activities</strong>
                        </p>

                    </div>
                    {/* <!-- Content --> */}
                </section>
              
                    <div class="container px-5">
                    
                    <section>
                                <div className="card mb-4 mt-2 pt-2 pb-2 wow fadeIn text-center">

                                    <span className="pull-right">
                                        <MDBBtn href="/employee" className={'btn btn-info'} style = {{'background-color':'blue'}}><i class="fas fa-eye mr-2" ></i>Employee View</MDBBtn>
                                        <MDBBtn onClick={this.toggleNewEmployee.bind(this)} className={'btn btn-info'}><i class="fas fa-plus mr-2"></i>Create Profile</MDBBtn>
                                        <Modal isOpen={this.state.newEmployeeModal} toggle={this.toggleNewEmployee.bind(this)}>                                            
                                            <ModalHeader toggle={this.closeToggle.bind(this)}>Create Employee Profile</ModalHeader>
                                            <ModalBody>
                                                <FormGroup>
                                                    <Label for='employeeId'>Employee Id</Label><br />
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                        <Input placeholder="Employee id" value={this.state.newEmployeeData.employee_id} onChange={(e) =>
                                                        {
                                                            let { newEmployeeData } = this.state;

                                                            newEmployeeData.employee_id = e.target.value;

                                                            this.setState({ newEmployeeData });

                                                        }} />
                                                    </InputGroupAddon>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for='full name'>full name</Label><br />
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                        <Input placeholder="Fistname" value={this.state.newEmployeeData.full_name} onChange={(e) =>
                                                        {
                                                            let { newEmployeeData } = this.state;

                                                            newEmployeeData.full_name = e.target.value;

                                                            this.setState({ newEmployeeData });

                                                        }} />
                                                    </InputGroupAddon>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for='first_name'>Fistname</Label><br />
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                        <Input placeholder="Fistname" value={this.state.newEmployeeData.first_name} onChange={(e) =>
                                                        {
                                                            let { newEmployeeData } = this.state;

                                                            newEmployeeData.first_name = e.target.value;

                                                            this.setState({ newEmployeeData });

                                                        }} />
                                                    </InputGroupAddon>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for='Lastname'>Lastname</Label><br />
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                        <Input placeholder="Lastname" value={this.state.newEmployeeData.last_name} onChange={(e) =>
                                                        {
                                                            let { newEmployeeData } = this.state;

                                                            newEmployeeData.last_name = e.target.value;

                                                            this.setState({ newEmployeeData });

                                                        }} />
                                                    </InputGroupAddon>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for='employeeId'>Employee Id</Label><br />
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                        <Input placeholder="Email" value={this.state.newEmployeeData.email} onChange={(e) =>
                                                        {
                                                            let { newEmployeeData } = this.state;

                                                            newEmployeeData.email = e.target.value;

                                                            this.setState({ newEmployeeData });

                                                        }} />
                                                    </InputGroupAddon>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for='phone_no'>Phone</Label><br />
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                        <Input placeholder="Phone No." value={this.state.newEmployeeData.phone_number} onChange={(e) =>
                                                        {
                                                            let { newEmployeeData } = this.state;

                                                            newEmployeeData.phone_number = e.target.value;

                                                            this.setState({ newEmployeeData });

                                                        }} />
                                                    </InputGroupAddon>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for='address'>Address</Label><br />
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>@</InputGroupText>
                                                        <Input placeholder="Address" value={this.state.newEmployeeData.address} onChange={(e) =>
                                                        {
                                                            let { newEmployeeData } = this.state;

                                                            newEmployeeData.address = e.target.value;

                                                            this.setState({ newEmployeeData });

                                                        }} />
                                                    </InputGroupAddon>
                                                </FormGroup>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="primary" onClick={this.addEmployee.bind(this)}>Add Employee</Button>
                                                <Button color="secondary" onClick={this.closeToggle.bind(this)}>Cancel</Button>
                                            </ModalFooter>
                                    </Modal> 
                                    </span>
                                </div>
                                                    

                                <div className="card">
                                    <div>
                                        

                                    </div>
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
                                </div> 
                    </section>                
               
                </div>
            </main>

        );
    }
}
export default EmployeeList;



