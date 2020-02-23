import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Badge, Jumbotron, Label, Progress, ToastHeader } from 'reactstrap';
import { COURSE_API_URL } from '../../../constants/utill';


class ChildComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            team:[]
        }
        this.getTeam();
    }   
   getTeam(){
    Axios.get(COURSE_API_URL + `teams/${this.props.tmId}`).then((response)=>{
        console.log(response.data);
        this.setState({
            team:response.data,
        })
    })
   } 
    render(){    
        let abc = this.state.team.map((t)=>{
            return(
            <div>
                <strong>
                    {t.team_name}
                </strong>
            </div>
            )
        })           
        return(        
            {abc}
        )
    }       
}


class GoalsView extends React.Component{
    state={
        goals:[],
        isOpen:false,
        team:[],
    }
    componentWillMount(){
        this.getGols();
    }
    getGols(){
        Axios.get(COURSE_API_URL + 'team_goals/').then((response) =>{
            console.log(response.data);
            this.setState({
                goals:response.data,
            })
        })
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
    render(){

        let viewGoals = this.state.goals.map((goal) =>{
            return(

                <MDBContainer className='card mb-2  #90caf9 blue lighten-3' key={goal.id}>
                    <a href={'/goal/' + goal.id} >   
                    <ToastHeader>
                        
                        <Badge color="warning">
                        Edit
                        </Badge> &nbsp;
                    {/* <ChildComponent tmId={1}/>    */}
                    &nbsp; {goal.goal_discription}&nbsp; 
                    <small>{goal.start_date}</small>
                    </ToastHeader>
                    </a>
                </MDBContainer>
            )
        })


        return(
            <section>
                <div className='mr-4 ml-4 mt-3 mb-2 text-align-center pt-4'>
                    <div className='row'>
                        <MDBContainer className='col-lg-7 col-md-7 col-sm-12 mr-0'>
                            <Jumbotron>
                                {viewGoals}
                            </Jumbotron>                       
                        </MDBContainer>

                        <MDBContainer className=" col-lg-4 col-md-4 col-sm-12 ml-0">
                            <Jumbotron>
                                    <p className="lead">Top Goal Activities</p>
                                <hr className="my-0" />
                                <MDBContainer>   
                                    <Label>Completed</Label>                  
                                    <Progress value="25" color="success" className="pull-right mt-2 mb-2">25%</Progress>
                                    <Label>In Progress</Label>     
                                    <Progress value={50} color="warning" className="pull-right mt-2 mb-2">50%</Progress>
                                    <Label>Deadline Missed</Label>     
                                    <Progress value={75} color="danger" className="pull-right mt-2 mb-2">75%</Progress>
                                </MDBContainer>  
                            </Jumbotron>
                        </MDBContainer>
                    </div>
                </div>
            {/* </div> */}
        </section>      
        )
    }
}
export default GoalsView;