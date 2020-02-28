import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { ToastHeader } from 'reactstrap';
import PaginationCust from '../../../constants/Pagination';
import { COURSE_API_URL } from '../../../constants/utill';



class GoalsView extends React.Component{
    
    state={
        goals:[],
        isOpen:false,
        team:[],
        loading : false,
        currentPage :1,
        postsPerPage :5,
    }
    // get current posts
    componentDidMount(){
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
        const indexOfLastPage = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage;
        const currentPosts = this.state.goals.slice(indexOfFirstPage, indexOfLastPage); 

        const paginate = pageNumber => this.setState({currentPage:pageNumber});

        let viewGoals = currentPosts.map((goal) =>{
            return(

                <MDBContainer className='card mb-2  #90caf9 blue lighten-3' key={goal.id}>
                    <a href={'/goal/' + goal.id} >   
                    <ToastHeader>
                    {/* <ChildComponent tmId={1}/>    */}
                    &nbsp; {goal.goal_discription}&nbsp; 
                    <small>{goal.start_date}</small> &nbsp;
                    {/* <Badge color="warning" className='end'>
                        Edit
                    </Badge> */}
                    </ToastHeader>
                    </a>
                </MDBContainer>
            )
        })
        return(
            <section>
                <MDBContainer MDBContainer className="card p-4 mt-4" style={{
                    display: "flex",
                    // justifyContent: "left",
                    alignItems: "center",
                    backgroundColor:"rgb(175, 200, 209)"
                    }}>
                   
                    {viewGoals}
                    <PaginationCust postsPerPage={this.state.postsPerPage} totalPosts={this.state.goals.length} paginate={paginate}/>
                </MDBContainer>
            {/* </div> */}
        </section>      
        )
    }
}
export default GoalsView;