import React from 'react';
import {MDBBtn, MDBContainer} from 'mdbreact';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroupText, InputGroupAddon, Input, FormGroup  } from 'reactstrap';
import Axios from 'axios';
import { Toast, ToastBody, ToastHeader, Spinner, Badge } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const COURSE_API_URL = 'http://localhost:8000/';

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
        today:"02/13/2020",
        newTeamData :{
            team_id:'',
            team_name:'',
            leader:'',
            start_date:'',
        },
        
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
    createTeam(){
        Axios.post(COURSE_API_URL + 'teams/', this.state.newTeamData).then((response) => {
                console.log(response.date);
                let {teams} = this.state;
                teams.push(response.data);

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
    
    render(){

        const pagi = () =>{
            return(
                <div>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
            );
        }

        let loopEmployees = this.state.employees.map((employee) =>{
            return(
                <option value={employee.id}>{employee.first_name}</option>
            )
        });


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
                <MDBContainer className='card mb-2'>
                    <ToastHeader>   
                    <Badge color="secondary">View</Badge> &nbsp;                 
                    <strong>{team.team_name}</strong>&nbsp;
                    <small>{team.start_date}</small>
                    </ToastHeader>
                    <ToastBody>
                    This is a toast with a primary icon — check it out!
                    </ToastBody>
                </MDBContainer>
                // </Toast>
            )
        })
        const titleTeam = () => {
            return(
                <div className="card-body text-white text-center py-1 px-8 my-3">
                    <h1 className="mb-4">
                        <strong>Team</strong>
                    </h1>
                    <p>
                        <strong>Create Team & achive the goal</strong>
                    </p>
                </div>     
            );     
        }
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
                </section>
                
                <section>
                        {/* <MDBContainer> */}
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
                        {/* </MDBContainer> */}
                        <div>
                            {/* {newTeam} */}
                        </div>
                </section>
                {/* <div className="container px-5"> */}
                <section>
                    {/* <MDBContainer> */}
                    <div className="card p-4" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgb(175, 200, 209)"
                        }}>
                        {viewTeam}
                    </div>
                    
                    {pagi}
                </section>                        
                {/* </div> */}
            </div>
        );
    }
}
export default ViewTeam;