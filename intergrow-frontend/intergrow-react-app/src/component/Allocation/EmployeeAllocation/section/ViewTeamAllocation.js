import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Badge, ToastHeader, Input } from 'reactstrap';
import { COURSE_API_URL } from '../../../../constants/utill';
import PaginationCust from '../../../../constants/Pagination';

class CreateEmployeeAllocation extends React.Component{
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
        
        currentPage :1,
        postsPerPage :5,
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

        const indexOfLastPage = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage;
        const currentPosts = this.state.teams.slice(indexOfFirstPage, indexOfLastPage); 

        const paginate = pageNumber => this.setState({currentPage:pageNumber});

        let viewTeam = currentPosts.map((team) =>{
            
            return(                
                <MDBContainer className=' mb-2 #90caf9 blue lighten-3' key={team.team_id}>
                    <a href={'/allocation/employee/'+ team.id}>
                    <ToastHeader>   
                    {/* <Badge color="warning">Edit</Badge> &nbsp;                  */}
                    <strong>{team.team_name}</strong>&nbsp;
                    <small>{team.start_date}</small>
                    </ToastHeader>
                    </a>
                </MDBContainer>                
            )
        })

        
        return(
            <section>
                {/* <MDBContainer style={{
                    display: "flex",
                    alignItems: "right"
                    }}>
                    <div class="md-form active-purple active-purple-2 mb-3"  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "right",
                    backgroundColor:"white",
                    }}>
                      <Input class="form-control" type="text" placeholder="Search" id="anythingSearch" aria-label="Search"/>
                    </div>
                </MDBContainer>
                 */}
                <MDBContainer className="card p-4 mt-4" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"rgb(175, 200, 209)"
                    }}>

                    

                    {viewTeam}
                    <PaginationCust  postsPerPage={this.state.postsPerPage} totalPosts={this.state.teams.length} paginate={paginate}/>

                    
                </MDBContainer>
                
            </section>  
        )
    }
}
export default CreateEmployeeAllocation;