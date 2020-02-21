import React from 'react';
import { MDBContainer, MDBIcon } from 'mdbreact';
import { Jumbotron, Button } from 'reactstrap';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../../constants/utill';

class GoalProgressView extends React.Component{
    
    constructor(props){
        super(props);   
    }

    state={
        goals:[],
        goal_progress:[],
    }
    componentDidMount(){
        this.getGoal();
    }
    getGoal(){
        console.log(this.props);
        Axios.get(COURSE_API_URL + 'team_goal/'+1).then((response) =>{
            console.log(response.data)
            this.setState({
                goals:response.data
            })
        })
    }
    getGoalProgress(){

    }




    render(){
        return(
            <div className='mr-4 ml-4 mt-3 mb-2 text-align-center #90caf9 blue lighten-3 pt-4'>
                <div className='row'>
                <MDBContainer className="col-lg-7 col-md-7 col-sm-12 mr-0">
                    <Jumbotron>
                        <h1 className="display-5">Progress</h1>
                        
                        <hr className="my-2" />
                        <p className="lead">Goal Discription</p>
                        
                        <p> <MDBIcon icon='calendar-alt'/> Progress Date : </p>
                        <hr className="my-2" />
                        <hr className="my-2" />
                        <p className="lead">Goal Discription</p>
                        
                        <p> <MDBIcon icon='calendar-alt'/> Progress Date : </p>
                        <hr className="my-2" />
                        {/* <p className="lead">                            
                        <Button type="button" className="btn btn-secondary btn-rounded">Add Progress</Button>
                        </p> */}
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
                            <Button type="button" className="btn btn-secondary btn-rounded">Add Progress</Button>
                            </p>
                        </Jumbotron>
                    </MDBContainer>
                
                </div>
            </div>

            
        )
    }
}
export default GoalProgressView;