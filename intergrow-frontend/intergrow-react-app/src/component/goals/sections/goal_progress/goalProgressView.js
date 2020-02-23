import Axios from 'axios';
import { MDBContainer, MDBIcon } from 'mdbreact';
import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { Button, Input, InputGroupText, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_API_URL } from '../../../../constants/utill';

class GoalProgressView extends React.Component{
    
    constructor(props){
        super(props);   
        this.state={
            goals:[],
            goal_progress:[],
            toggleModal:false,
            newProgress:{
                goal:this.props.idx,
                progress_description:'',
                progress_date:'',

            }
        }
        
    }
    
    
    componentWillMount(){
        this.getGoal();
        this.getGoalProgress(); 
    }
    getGoal(){
        // console.log(this.props.idx);
        Axios.get(COURSE_API_URL + 'team_goal/'+ this.props.idx).then((response) =>{
            // console.log(response.data);
            this.setState({
                goals:response.data
            })
        })
    }
    getGoalProgress(){
        Axios.get(COURSE_API_URL + 'goal/goal_progress/' + this.props.idx).then((response)=>{
            console.log(response.data);
            this.setState({
                goal_progress:response.data
            })
            // if(response.data.goal == this.props.idx){
            //     this.setState({
            //         goal_progress:response.data,
            //     })

            // }
            
        })
    }

    toggle(){
        this.setState({
            toggleModal:true,
        })
    }
    toggleClose(){
        this.setState({
            toggleModal:false,
        })
    }
    render(){
        return(
            <div className='mr-4 ml-4 mt-3 mb-2 text-align-center #90caf9 blue lighten-3 pt-4'>
                <div className='row'>
                    <MDBContainer className="col-lg-7 col-md-7 col-sm-12 mr-0">
                        
                    <Jumbotron>
                        <h1 className="display-5">Progress</h1>
                      { 
                      this.state.goal_progress.map((gp) => {
                          return(
                            <div key={gp.id}>
                                <hr className="my-2" />
                                <p className="lead text-success"><strong>{gp.progress_description}</strong><MDBIcon icon='check'className='pl-2'/></p>
                                
                          <p> <MDBIcon icon='calendar-alt'/> Progress Date : {gp.progress_date}</p>
                                <hr className="my-2" />
                            </div>
                          )

                      })}  
                      
                      </Jumbotron>
                        

                    </MDBContainer>
                
                    <MDBContainer className=" col-lg-4 col-md-4 col-sm-12 ml-0">
                        <Jumbotron>
                            <h1 className="display-5"></h1>
                            <p className="lead">{this.state.goals.goal_discription}</p>
                            <hr className="my-2" />
                            <p><MDBIcon icon='calendar-alt'/> Start Date : {this.state.goals.start_date}</p>
                            <p><MDBIcon icon='calendar-alt'/> End Date : {this.state.goals.end_date}</p>
                            <p className="lead">    
                            </p>
                        </Jumbotron>
                        
                           
                        <Modal isOpen={this.state.toggleModal} toggle={this.toggle.bind(this)}>
                            <ModalHeader toggle={this.toggleClose.bind(this)}>Create Goal</ModalHeader>
                                <ModalBody>
                                    <FormGroup addonType="prepend" >
                                        <InputGroupText><i className="fas fa-pen mr-2" ></i></InputGroupText>
                                        <Input placeholder='Progress Description'
                                        
                                        />
                                    </FormGroup>
                                    <FormGroup addonType="prepend">
                                        <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                        <Input type='date'
                                        />
                                    </FormGroup>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleClose.bind(this)}>Set</Button>
                                    <Button color="secondary" onClick={this.toggleClose.bind(this)}>Cancel</Button>
                                </ModalFooter>
                        </Modal>                                                    
                        <Button type="button" className="btn btn-secondary btn-rounded" onClick={this.toggle.bind(this)}>Add Progress</Button>                            
                    </MDBContainer>
                
                </div>
            </div>

            
        )
    }
}
export default GoalProgressView;