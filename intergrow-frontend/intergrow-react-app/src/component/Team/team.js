import Axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdbreact';
import React, {useState} from 'react';
import { Badge, Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, ToastBody, ToastHeader, Collapse, Alert } from 'reactstrap';
import {CardBody, Card} from 'reactstrap';
import { COURSE_API_URL } from '../../constants/utill';
import TeamSubNav from './sections/TeamSubNav';



class ViewTeam extends React.Component{

    todayDate() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        const currDate =date;
        return (
          <p>{currDate}</p>
        );
      }

    state = {
        teams : [],
        employees:[],
        leader:[],
        today:"02/13/2020",
        newTeamData :{
            team_id:'',
            team_name:'',
            leader:'',
            start_date:''
        },
        
        newEmployeeData:{
            team_id:'',
            employee_id:''
        },
        

        members:2,
        
        isOpen : false,
        newTeamToggleModal : false,        
    }
    componentWillMount(){
        this.getTeams();   
        this.getEmployee();  
        this.getTeamById('TM001');   
    }
    getTeams(){
        Axios.get(COURSE_API_URL + 'teams/').then((response) => {
            this.setState({
                teams : response.data,
            })
        });        
    }
    toggle(){
        if(this.state.isOpen === false){
            this.setState({
                isOpen:true,
            })
            
        }
        else{
            this.setState({
                isOpen:false,
            })
        }
    }
    getLeader(id){
        Axios.get(COURSE_API_URL + `employee/${id}`).then((response) =>{
            // console.log(response.data);
            this.state({
                leader : response.data,
            })
        })
    }
    
    newTeamToggle(){
        this.setState({
            newTeamToggleModal:true,
        });
    }
    closeTeamToggle(){
        this.setState({
            newTeamToggleModal:false,
        });
    }     
    // successfullyCreated (){
    // }
    createTeam(){
        Axios.post(COURSE_API_URL + 'teams/', this.state.newTeamData).then((response) => {
                console.log(response.date);
                let {teams} = this.state;
                teams.push(response.data);

                // this.successfullyCreated();

                this.setState({
                    teams,
                    newTeamData:false,
                    
                    team_id:'',
                    team_name:'',
                    leader:'',
                    start_date:'',
                    newTeamToggleModal : false,
                })
            });    
        Axios.post(COURSE_API_URL + 'teamEmployees/', this.state.newEmployeeData).then((response)=>{
            
        })
    }
    getTeamById(id){
        Axios.get(COURSE_API_URL + `team/${id}`).then((response)=>{
            console.log(response.data);
        });
    }
    getEmployee(){
        Axios.get(COURSE_API_URL + 'employees/').then((response) => {
            console.log(response.data);
            this.setState({
                employees : response.data,
            })
        });
    }

    createEmpForms = () =>{
        let frms = []
            for (let i = 0; i < this.state.members; i++) {
                frms.push(
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-hiking mr-2" ></i></InputGroupText>
                        <Input type="select" name="member" placeholder='Member '
                        //  value={this.state.newTeamData.member} onChange = {(e) =>
                        //     {
                        //         let { newTeamData } = this.state;        
                        //         // newTeamData.member = e.target.value;        
                        //         this.setState({ newTeamData });        
                        //     }}
                        >
                            <option>Member {i+1}</option>
                                {/* {
                                    this.state.employees.map((employee) =>{
                                        return(
                                            <option value={employee.id}>{employee.first_name}</option>
                                        )
                                    })
                                } */}
                        </Input>
                    </InputGroupAddon>
                </FormGroup>   
                )
            }
            return frms;
        }
    
    render(){
        let newTeam = this.state.teams.map(()=>{
            return(
                <Modal isOpen={this.state.newTeamToggleModal} toggle={this.newTeamToggle.bind(this)}>
                        <ModalHeader onClick = {this.newTeamToggle.bind(this)}>Create Team</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                                <Input placeholder="Team Id" value={this.state.newTeamData.team_id} onChange={(e) =>
                                {
                                    let { newTeamData } = this.state;
    
                                    newTeamData.team_id = e.target.value;
    
                                    this.setState({ newTeamData });
    
                                }} />
                                <InputGroupText>TM00X</InputGroupText>
                            </InputGroupAddon>
                        </FormGroup>   
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-users mr-2" ></i></InputGroupText>
                                <Input placeholder="Team Name" value={this.state.newTeamData.team_name} onChange={(e) =>
                                {
                                    let { newTeamData } = this.state;
    
                                    newTeamData.team_name = e.target.value;
    
                                    this.setState({ newTeamData });
    
                                }} />
                            </InputGroupAddon>
                        </FormGroup>   
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-hiking mr-2" ></i></InputGroupText>
                                <Input type="select" name="leader" value={this.state.newTeamData.leader} onChange = {(e) =>
                                    {
                                        let { newTeamData } = this.state;        
                                        newTeamData.leader = e.target.value;        
                                        this.setState({ newTeamData });        
                                    }}
                                >
                                    <option>Leader</option>
                                    {
                                        this.state.employees.map((employee) =>{
                                            return(
                                                <option value={employee.id}>{employee.first_name}</option>
                                            )
                                        })
                                    }
                                </Input>
                                {/* <Input placeholder="Leader" value={this.state.newTeamData.leader} onChange={(e) =>
                                {
                                    let { newTeamData } = this.state;
    
                                    newTeamData.leader = e.target.value;
    
                                    this.setState({ newTeamData });
    
                                }} /> */}
                            </InputGroupAddon>
                        </FormGroup>   
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                <Input type = 'number' min='2' max='10' placeholder="Number of Employee" value={this.state.members} onChange={(e) =>
                                {
                                    let { memb} = this.state;
    
                                    memb = e.target.value;
    
                                    this.setState({ members:memb });                                    
    
                                }} />
                            </InputGroupAddon>
                        </FormGroup>
                        {this.createEmpForms()}
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                <Input type = 'date' placeholder="Date" value={this.state.newTeamData.start_date} onChange={(e) =>
                                {
                                    let { newTeamData } = this.state;
    
                                    newTeamData.start_date = e.target.value;
    
                                    this.setState({ newTeamData });
                                    
    
                                }} />
                            </InputGroupAddon>
                        </FormGroup>   

                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" rounded='true' onClick = {this.createTeam.bind(this)}>Create</Button>
                    <Button color="danger" rounded='true'  onClick = {this.closeTeamToggle.bind(this)} >Cancel</Button>
                    </ModalFooter>
                </Modal>                
            );
        });
        let viewTeam = this.state.teams.map((team) =>{
            return(
                // <Toast color='danger'>
                // <div style={{width:'800px'}} className='card mb-3'>
                <MDBContainer className='card mb-2' key={team.team_id}>
                    <ToastHeader>   
                    <Badge color="secondary">View</Badge> &nbsp;                 
                    <strong>{team.team_name}</strong>&nbsp;
                    <small>{team.start_date}</small>
                    </ToastHeader>
                    <ToastBody>
                    {/* This is a toast with a primary icon — check it out! */}
                    <Button color="primary" className='pt-0 mt-0' style={{height:'20px'}} onClick={this.toggle.bind(this)}>Show</Button>
                        <Collapse isOpen={this.state.isOpen}>
                            <Card>
                            <CardBody>
                                Leader:                                

                            </CardBody>
                            </Card>
                        </Collapse>
                    </ToastBody>
                </MDBContainer>
                // </Toast>
            )
        })
        return(
            <div>
                <section className="card aqua-gradient wow fadeIn  text-uppercase">
                    {/* <titleTeam/> */}
                    <div className="card-body text-white text-center py-1 px-8 my-3">
                        <h1 className="mb-4">
                            <strong>Team</strong>
                        </h1>
                        <p>
                            <strong>Create Team & achive the goal</strong>
                        </p>
                    </div>  
                    {TeamSubNav}
                </section>
                <section>
                            <div className="card mb-2 mt-2 pt-2 pb-2 text-center wow fadeIn">
                                
                                <span className="pull-right">
                                <MDBBtn 
                                color = 'primary'
                                
                                className={'btn btn-info'}
                                onClick = {this.newTeamToggle.bind(this)}
                                rounded 
                                >
                                    <i className="fas fa-plus mr-2" ></i>Create Team</MDBBtn>
                                </span>
                                {newTeam}
                            </div>
                </section>
                <section>
                    <div className="card p-4" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgb(175, 200, 209)"
                        }}>
                        {viewTeam}
                    </div>
                    
                </section>    
            </div>
        );
    }
}
export default ViewTeam;