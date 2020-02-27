import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Badge, Jumbotron, Label, Progress, ToastHeader } from 'reactstrap';
import { COURSE_API_URL } from '../../../../constants/utill';
import PaginationCust from '../../../../constants/Pagination';



class IndividualGoalView extends React.Component{
    
    state={
        individual_goals:[],
        isOpen:false,
        team:[],
        loading : false,
        currentPage :1,
        postsPerPage :5,
    }
    // get current posts
    componentDidMount(){
        this.getIndividualGoals();
    }
    getIndividualGoals(){
        Axios.get(COURSE_API_URL + 'individual_goal/').then((response) =>{
            console.log(response.data);
            this.setState({
                individual_goals:response.data,
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
        const currentPosts = this.state.individual_goals.slice(indexOfFirstPage, indexOfLastPage); 

        const paginate = pageNumber => this.setState({currentPage:pageNumber});

        let viewGoals = currentPosts.map((goal) =>{
            return(

                <MDBContainer className='card mb-2  #90caf9 blue lighten-3' key={goal.id}>
                    <a href={'/individual_goal/' + goal.id} >   
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
                <MDBContainer className="card p-4 mt-4" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"rgb(175, 200, 209)"
                    }}>
                        {/* <MDBContainer className='col-lg-12 col-md-12 col-sm-12 mr-0'> */}
                            {/* <Jumbotron className='mb-1 pb-4 pt-5'>   */}
                            {viewGoals}
                            {/* </Jumbotron>                              */}
                            <PaginationCust postsPerPage={this.state.postsPerPage} totalPosts={this.state.individual_goals.length} paginate={paginate}/>
                                             
                        {/* </MDBContainer> */}

                        {/* <MDBContainer className=" col-lg-4 col-md-4 col-sm-12 ml-0">
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
                        </MDBContainer> */}
                </MDBContainer>
            {/* </div> */}
        </section>      
        )
    }
}
export default IndividualGoalView;