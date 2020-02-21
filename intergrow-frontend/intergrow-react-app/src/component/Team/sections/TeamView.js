import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Badge, Button, CardBody, Collapse, ToastBody, ToastHeader } from 'reactstrap';
import { COURSE_API_URL } from '../../../constants/utill';

class TeamView extends React.Component{
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
        let viewTeam = this.state.teams.map((team) =>{
            return(                
                <MDBContainer className=' mb-2' key={team.team_id}>
                    <a href={'/team/'+ team.id}>
                    <ToastHeader>   
                    <Badge color="warning">Edit</Badge> &nbsp;                 
                    <strong>{team.team_name}</strong>&nbsp;
                    <small>{team.start_date}</small>
                    </ToastHeader>
                    </a>
                </MDBContainer>                
            )
        })
        return(
            <section>
                <MDBContainer className="card p-4" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"rgb(175, 200, 209)"
                    }}>
                    {viewTeam}
                </MDBContainer>
                
            </section>  
        )
    }
}
export default TeamView;