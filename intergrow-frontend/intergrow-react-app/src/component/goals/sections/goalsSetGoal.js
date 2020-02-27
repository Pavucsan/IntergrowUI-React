import Axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdbreact';
import React from 'react';
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { COURSE_API_URL } from '../../../constants/utill';

class GoalsSetGoals extends React.Component{
    // constructor(){
    //     super();
        state = {
            goals:[],
            teams:[],
            employees:[],
            setGoalModal:false,
            // goalOption:'team',
            newGoalData:{
                team:'',
                goal_discription:'',
                start_date:'',
                end_date:''
            },
            goalOption:'team',
        }
        
    // }

    componentWillMount(){
        this.getGoals();
        this.onRadioChanged = this.onRadioChanged.bind(this);
        this.getEmployee();
        this.getTeam();
    }

    createGoal(){
        console.log(this.state.newGoalData);
        Axios.post(COURSE_API_URL + 'team_goals/', this.state.newGoalData).then((response)=>{
            console.log(response.data);
            let {goals} = this.state;
            goals.push(response.data);
            
            this.setState({
                goals,
                newGoalData:{
                team:'',
                goal_discription:'',
                start_date:'',
                end_date:''
                },
                setGoalModal:false,
            });
        });
    }
    getGoals(){
        Axios.get(COURSE_API_URL + 'team_goals/').then((response)=>{  
            this.setState({
                goals:response.data,
            })
        })
    }
    setGoalToggle(){
        this.setState({
            setGoalModal:true,
        })
    }
    closeToggle(){
        this.setState({
            setGoalModal:false,
        })
    }
    getTeam(){
        Axios.get(COURSE_API_URL + 'teams/').then((response)=>{
            console.log(response.data);
            this.setState({
                teams:response.data
            })
        })
    }
    getEmployee(){
        Axios.get(COURSE_API_URL + 'employees/').then((response)=>{
            console.log(response.data);
            this.setState({
                employees:response.data
            })
        })
    }
    onRadioChanged(e){
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    selectGoalOption(){
        this.setState({
            goalSelectOption:true,
        })
    }

    render(){
        
        return(
            <section>
                {/* <div className=" mb-2 mt-2 pt-2 pb-2  wow fadeIn"> */}
                <MDBContainer className="card p-1 mt-4" style={{
                    display: "flex",
                    // justifyContent: "left",
                    alignItems: "left",
                    backgroundColor:"rgb(175, 200, 209)"
                    }}>

                    <span className="pull-right">

                    <MDBBtn 
                    color = 'primary'                                
                    className={'btn btn-info'}
                    onClick = {this.setGoalToggle.bind(this)}
                    >
                        <i className="fas fa-plus mr-2" ></i>Set Goals</MDBBtn>
                    </span>

                    <Modal isOpen={this.state.setGoalModal} toggle={this.setGoalToggle.bind(this)}>    
                    <ModalHeader toggle={this.closeToggle.bind(this)}>Create Goal</ModalHeader>
                    <ModalBody>

                        {/* <FormGroup tag="fieldset">
                            <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                            <Row sm={10}>
                            <FormGroup className='p-0 m-0' check>
                                <Label  className='p-0 m-0' check>
                                <Input type="radio" 
                                name="goalOption"         
                                value = 'team'                        
                                checked={this.state.goalOption === 'team'}
                                onChange={this.onRadioChanged}
                                />
                                Team Goal
                                </Label>
                            </FormGroup>
                            <FormGroup className='p-0 m-0' check>
                                <Label  className='p-0 m-0' check>
                                <Input type="radio" 
                                name="goalOption" 
                                value='employee' 
                                checked={this.state.goalOption === 'employee'}
                                onChange={this.onRadioChanged}
                                />{' '}
                                Employee Goal
                                </Label>
                            </FormGroup>
                            </Row>
                        </FormGroup> */}
                        
                        <FormGroup >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                                    <Input type="select" name="teamIn" 
                                    value={this.state.newGoalData.team}
                                    onChange = {((e)=>{
                                        let {newGoalData} = this.state;
                                        newGoalData.team = e.target.value;
                                        this.setState({newGoalData});
                                    })}
                                            >
                                                <option>Team</option>
                                                {
                                                    this.state.teams.map((team) =>{
                                                        return(
                                                            <option value={team.id}>{team.team_name}</option>
                                                        )
                                                    })
                                                }
                                            </Input>
                                </InputGroupAddon>
                            </FormGroup> 




                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-lightbulb mr-2" ></i></InputGroupText>
                                <Input type='textarea' placeholder="Goal description"
                                name='goal_discription'
                                value={this.state.newGoalData.goal_discription}
                                onChange={((e)=>{
                                    let {newGoalData} = this.state;
                                    newGoalData.goal_discription = e.target.value;
                                    this.setState({newGoalData});
                                })}
                                 />
                            </InputGroupAddon>
                        </FormGroup> 
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                <InputGroupText>Start Date</InputGroupText>
                                <Input type='date' placeholder="start date" 
                                    name='start_date'
                                    value={this.state.newGoalData.start_date}
                                    onChange={((e)=>{
                                        let {newGoalData} = this.state;
                                        newGoalData.start_date = e.target.value;
                                        this.setState({newGoalData});
                                    })}
                                />
                            </InputGroupAddon>
                        </FormGroup>  
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-calendar-check mr-2" ></i></InputGroupText>
                                <InputGroupText>End Date</InputGroupText>
                                <Input type='date' placeholder="End date" 
                                    name='end_date'
                                    value={this.state.newGoalData.end_date}
                                    onChange={((e)=>{
                                        let {newGoalData} = this.state;
                                        newGoalData.end_date = e.target.value;
                                        this.setState({newGoalData});
                                    })}
                                     />
                            </InputGroupAddon>
                        </FormGroup>                                      
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.createGoal.bind(this)}>Set</Button>
                        <Button color="danger" onClick={this.closeToggle.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal> 

                </MDBContainer>
            </section>    
        )
    }
}
export default GoalsSetGoals;