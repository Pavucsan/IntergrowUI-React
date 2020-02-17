import axios from 'axios';
import { MDBBtn, MDBCard, MDBContainer, MDBIcon } from 'mdbreact';
import React from 'react';
import EllipsisText from 'react-ellipsis-text';
import Carousel from "react-multi-carousel";
//response for carousel **** 
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Label, Progress } from 'reactstrap';
import '../../css/home.css';
import AdminCardSection1 from './section/AdminCardSection1';
// import '../../css/index.css';
import Axios from 'axios';
import { COURSE_API_URL } from '../../constants/utill';
import AdminTitleCard from './section/AdminTitleCard';
import AdminTeamCard from './section/AdminTeamCard';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

let i = 0;
/*****end */

/**Backend API */
// const COURSE_API_URL = 'http://localhost:8000/employees/';


class Home extends React.Component {

    constructor(props)
    {
        super(props);
        i = 0;
    }
    state = {
        i:1,
        employees: [],
        helps : [],  
        responses : [],     
        teams : [], 
    }

// Initial stage
    componentWillMount()
    {
        this._refreshProject();
        this.getHelps();
        this.getResponses();
        this.getTeams();
    }

    _refreshProject()
    {
        axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            })
            // console.log('sfsdf');
            // console.log(this.state.employees);
        });

    }
// End

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

        let topEmployees = this.state.employees.map((emp) =>
        {
            if (i < 3) {
                i = i + 1;
                return (

                    <div className='pt-3 pb-4' style={{
                        paddingLeft: "10px", paddingRight: '10px'
                    }}>
                        <Link to={"/employee/" + emp.employee_id} refresh="true" >
                            <MDBCard
                                className='card-image'
                                style={{

                                    // backgroundImage:
                                        // `url(data:image/png;base64,${policyiess.policyImage})`,
                                    backgroundImage:'url(https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div
                                    className='text-white text-center  d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>

                                    <div>
                                        <h3 className='py-3 font-weight-bold'>
                                            <strong>{emp.first_name}</strong>
                                            <br />
                                            <h6>{emp.full_name}</h6>
                                        </h3>
                                        <p className='pb-3'>
                                            <EllipsisText text={emp.last_name} length={"70"} />
                                        </p>
                                        <MDBBtn color='success' size='md'>
                                            <MDBIcon far icon='clone' className='left' />More</MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </Link>
                    </div>
                )

            }

        });
    
    let teamProgress = (()=>{
        return(
            <div>
            <Progress value={2 * 5} />
            <Progress color="success" value="25" />
            <Progress color="info" value={50} />
            <Progress color="warning" value={75} />
            <Progress color="danger" value="100" />
          </div>
        );
    });

        
    return(
        <React.Fragment>
        <div> 
            <AdminTitleCard/>
            
            <MDBContainer xl="2" md="4">
            
            <div className="card mb-4 mt-3 wow fadeIn">

                <div className="card-header font-weight-bold">
                    <span><h2>Goals Reached</h2></span>
                </div>
                <span className="pull-right m-2 mt-5">
                    <React.Fragment>
                        <AdminCardSection1 
                            help={this.state.helps} 
                            responses = {this.state.responses} 
                            teams = {this.state.teams}
                            employees = {this.state.employees}
                        />
                    </React.Fragment>   
                </span>
            </div>

            <div className="card mb-4 mt-3 wow fadeIn">

                <div className="card-header font-weight-bold">
                    <span><h2>Team Activities</h2></span>
                </div>
                <span className="pull-right m-2">
                    <AdminTeamCard/>                               
                </span>
            </div>


            <div className="card mb-4 mt-3 wow fadeIn">

                <div className="card-header font-weight-bold">
                    <span><h2>Top Employees</h2></span>
                </div>
                <span className="pull-right">

                <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        >
                        {topEmployees}
                        </Carousel>
                </span>
            </div>

            
        </MDBContainer>
        <MDBContainer className="cascading-admin-card">
        <div className="card mb-4 mt-3 wow fadeIn">

                <div className="card-header font-weight-bold">
                    <span><h2>Overall Progress</h2></span>
                </div>
                <span className="pull-right">

                    
                </span>
            </div>
        </MDBContainer>
    </div>
    
    </React.Fragment>
            
    );
    
    }
}

export default Home;

