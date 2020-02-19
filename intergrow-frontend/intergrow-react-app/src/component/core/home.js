import axios from 'axios';
import { MDBBtn, MDBCard, MDBContainer, MDBIcon } from 'mdbreact';
import React from 'react';
import EllipsisText from 'react-ellipsis-text';
//response for carousel **** 
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Label, Progress } from 'reactstrap';
import '../../css/home.css';

// import '../../css/index.css';
import Axios from 'axios';
// api
import { COURSE_API_URL } from '../../constants/utill';

import AdminGoalsCard from './section/AdminGoalsCard';
import AdminTitleCard from './section/AdminTitleCard';
import AdminTeamCard from './section/AdminTeamCard';
import AdminEmmployeeCard from './section/AdminEmployeeCard';
import AdminOverallProgressCard from './section/AdminOverallProgressCard';



/**Backend API */
// const COURSE_API_URL = 'http://localhost:8000/employees/';


class Home extends React.Component {

    constructor(props)
    {
        super(props);
    }
    state = {
        employees: [],
        helps : [],  
        responses : [],     
        teams : [], 
    }
// Initial stage
    componentWillMount()
    {
        this.getEmployees();
        this.getHelps();
        this.getResponses();
        this.getTeams();
    }

    getEmployees()
    {
        axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            })
        });

    }
  getHelps(){
    Axios.get(COURSE_API_URL + 'helps/').then((respone) => {
      this.setState({
          helps:respone.data
      }) 
    });
  }
  getResponses(){
    Axios.get(COURSE_API_URL + 'responses/').then((respone) => { 
          this.setState({
            responses:respone.data
          }) 
    });
  }
  getTeams(){
    Axios.get(COURSE_API_URL + 'teams/').then((respone) => {  
          this.setState({
            teams:respone.data
          }) 
    });
  }
    render() {
    return(
        <React.Fragment>
        <div> 
            <AdminTitleCard/>
            
            <MDBContainer xl="2" md="4">
            
            <AdminGoalsCard 
                help={this.state.helps} 
                responses = {this.state.responses} 
                teams = {this.state.teams}
                employees = {this.state.employees}
            />  

            <AdminTeamCard/>  

            <AdminEmmployeeCard/>

            </MDBContainer>
            <MDBContainer xl="2" md="4">
                <AdminOverallProgressCard/>
            </MDBContainer>
    </div>    
    </React.Fragment>
            
    );    
    }
}

export default Home;

