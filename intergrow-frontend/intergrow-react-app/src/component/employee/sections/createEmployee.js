import React from 'react';
import { MDBBtn } from 'mdbreact';
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_API_URL, COURSE_AUTH_USERS_URL } from '../../../constants/utill';
import Axios from 'axios';

class CreateEmployee extends React.Component{
    constructor(props){
        super(props);

        this.state = {
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
            credencials: {username: '', password: ''},
            newEmployeeModal:false,    
            errorMsg:''
        }
    }
    register = () =>{
        // use BE api to login    
        // API from Backend
        fetch(COURSE_AUTH_USERS_URL, {
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(this.state.credencials)
        })
        // 1st get the data as json
        .then(data => data.json())
        // use json data 'use token as authendication'
        .then(data => {
          if(data.token == null){        
            console.error("Register faild!");  
            // this.closeToggle();
          }
          else{
            console.log("Registration success");
            console.log(data.token);
            // this.closeToggle();
          }
        })
    }
    inputChange = e =>{
        const cred = this.state.credencials;
        // target will set at onChange and find by name 
        cred[e.target.name] = e.target.value;
        this.setState({
          credencials:cred,
        })
      }
    // Initial stage
    componentWillMount()
    {
        this._refreshEmployee.bind(this);
    }
    _refreshEmployee()
    {
        Axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            });
            // console.log(this.state.employees);
        });
    }
    // End
    // add new employee
    toggleNewEmployee(){
        this.setState({
            newEmployeeModal:true
        })
    }
    addEmployee = (e) =>
    {
        // console.log(e.target.value);
        // if(e.target.value){
            // this.setState.newEmployeeData.full_name = this.state.newEmployeeData.first_name + " " + this.state.newEmployeeData.last_name;
            
            Axios.post(COURSE_API_URL + 'employees/', this.state.newEmployeeData).then((response)=>{

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
            this.register();
        }
        // else{
        //     this.setState({})
        // }

    // }    
    // Add employee finished

    closeToggle(){
    this.setState({
        newEmployeeModal:false
    })
    }


    render(){
        return(
            <section>
            <div className="card mb-4 mt-2 pt-2 pb-2 wow fadeIn text-center">

                <span className="pull-right">
                    <MDBBtn href="/employee" className={'btn btn-info'} style = {{'background-color':'blue'}}><i class="fas fa-eye mr-2" ></i>Employee View</MDBBtn>
                    <MDBBtn onClick={this.toggleNewEmployee.bind(this)} className={'btn btn-info'}><i class="fas fa-plus mr-2"></i>Create Profile</MDBBtn>
                    <Modal isOpen={this.state.newEmployeeModal} toggle={this.toggleNewEmployee.bind(this)}>                                            
                        <ModalHeader toggle={this.closeToggle.bind(this)}>Create Employee Profile</ModalHeader>
                        <div className='row mr-2 ml-2 '>
                            <ModalBody className='col-lg-7 col-md-7 col-sm-12 mr-0'>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                                        <Input placeholder="Employee id" value={this.state.newEmployeeData.employee_id} onChange={(e) =>
                                        {
                                            let { newEmployeeData } = this.state;

                                            newEmployeeData.employee_id = e.target.value;

                                            this.setState({ newEmployeeData });

                                        }} required/>
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-address-card mr-2" ></i></InputGroupText>
                                        <Input placeholder="FullName" value={this.state.newEmployeeData.full_name} onChange={(e) =>
                                        {
                                            let { newEmployeeData } = this.state;

                                            newEmployeeData.full_name = e.target.value;

                                            this.setState({ newEmployeeData });

                                        }} required/>
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-address-card mr-2" ></i></InputGroupText>
                                        <Input placeholder="Fistname" value={this.state.newEmployeeData.first_name} onChange={(e) =>
                                        {
                                            let { newEmployeeData } = this.state;

                                            newEmployeeData.first_name = e.target.value;

                                            this.setState({ newEmployeeData });

                                        }} required/>
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-address-card mr-2" ></i></InputGroupText>
                                        <Input placeholder="Lastname" value={this.state.newEmployeeData.last_name} onChange={(e) =>
                                        {
                                            let { newEmployeeData } = this.state;

                                            newEmployeeData.last_name = e.target.value;

                                            this.setState({ newEmployeeData });

                                        }} required/>
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-envelope mr-2" ></i></InputGroupText>
                                        <Input placeholder="Email" value={this.state.newEmployeeData.email} onChange={(e) =>
                                        {
                                            let { newEmployeeData } = this.state;

                                            newEmployeeData.email = e.target.value;

                                            this.setState({ newEmployeeData });

                                        }} required/>
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-phone mr-2" ></i></InputGroupText>
                                        <Input placeholder="Phone No." value={this.state.newEmployeeData.phone_number} onChange={(e) =>
                                        {
                                            let { newEmployeeData } = this.state;

                                            newEmployeeData.phone_number = e.target.value;

                                            this.setState({ newEmployeeData });

                                        }} />
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-map-marker-alt mr-2" ></i></InputGroupText>
                                        <Input placeholder="Address" value={this.state.newEmployeeData.address} onChange={(e) =>
                                        {
                                            let { newEmployeeData } = this.state;

                                            newEmployeeData.address = e.target.value;

                                            this.setState({ newEmployeeData });

                                        }} />
                                    </InputGroupAddon>
                                </FormGroup>
                            </ModalBody>
{/* User********************************** */}
                            <ModalBody className='col-lg-5 col-md-5 col-sm-12 mr-0 size-auto grey'>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-user mr-2" ></i></InputGroupText>
                                        <Input placeholder="User Name"
                                        name='username'
                                        value={this.state.credencials.username}
                                        onChange={this.inputChange}
                                        />
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><i className="fas fa-key" ></i></InputGroupText>
                                        <Input type='password' placeholder="Password"
                                        name='password'
                                        value={this.state.credencials.password}
                                        onChange={this.inputChange}
                                        />
                                    </InputGroupAddon>
                                </FormGroup>
                                <hr/>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Input placeholder="Role" />
                                    </InputGroupAddon>
                                </FormGroup>
                            </ModalBody>
                        </div>
                        <ModalFooter>
                            <Button color="primary" onClick={this.addEmployee.bind(this)}>Register</Button>
                            <Button color="secondary" onClick={this.closeToggle.bind(this)}>Cancel</Button>
                        </ModalFooter>
                </Modal> 
                </span>
            </div> 
            </section>
        )
    }
}
export default CreateEmployee;