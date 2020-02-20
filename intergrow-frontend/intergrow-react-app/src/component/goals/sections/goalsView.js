import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Badge, Button, Card, CardBody, Collapse, ToastBody, ToastHeader } from 'reactstrap';
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
                <MDBContainer className='card mb-2' key={goal.id}>
                    <ToastHeader>   
                    <Badge color="secondary">View</Badge> &nbsp;   

                    {/* <ChildComponent tmId={1}/>    */}

                    &nbsp;
                    <small>{goal.start_date}</small>
                    </ToastHeader>
                    <ToastBody>
                        <Collapse isOpen={this.state.isOpen}>
                            {/* <Card> */}
                            <CardBody>
                                {goal.goal_discription}
                            </CardBody>
                            {/* </Card> */}
                        </Collapse>
                        <Button color="primary" className='pt-0 mt-0' style={{height:'20px'}} onClick={this.toggle.bind(this)}>Show</Button>
                    </ToastBody>
                </MDBContainer>
            )
        })


        return(
            <section>
            <div className="card p-4" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:"rgb(175, 200, 209)"
                }}>
                {viewGoals}
            </div>
        </section>      
        )
    }
}
export default GoalsView;