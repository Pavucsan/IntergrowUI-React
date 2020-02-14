import React from 'react';
import { MDBBtn } from 'mdbreact';
import { MDBCarousel, MDBIcon, MDBCard, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import {Progress, Label } from 'reactstrap';

import EllipsisText from 'react-ellipsis-text';
import '../../css/home.css';

import axios from 'axios';
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

//response for carousel **** 
import "react-multi-carousel/lib/styles.css";
import AdminCardSection1 from './section/AdminCardSection1';

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
const COURSE_API_URL = 'http://localhost:8000/employees/';



class Home extends React.Component {

    constructor(props)
    {
        super(props);
        i = 0;
    }
    state = {
        i:1,
        employees: []         
    }

// Initial stage
    componentWillMount()
    {
        this._refreshProject();
    }

    _refreshProject()
    {
        axios.get(COURSE_API_URL).then((response) =>
        {
            this.setState({
                employees: response.data
            })
            // console.log('sfsdf');
            console.log(this.state.employees);
        });

    }
// End

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
             <section class="card aqua-gradient wow fadeIn text-uppercase">

                {/* <!-- Content --> */}
                <div class="card-body text-white text-center py-1 px-8 my-1">

                    <h1 class="mb-4">
                        <strong>Welcome to Intergrow</strong>
                    </h1>
                    <p>
                        <strong>Join with intergrow activities</strong>
                    </p>

                </div>
            {/* <!-- Content --> */}
            </section>

                    {/* <MDBCarousel
                            activeItem={1}
                            length={3}
                            showControls={true}
                            showIndicators={true}
                            className="z-depth-1"
                        >
                            <MDBCarouselInner style={{height:'300px'}}>
                                <MDBCarouselItem itemId="1">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                            alt="Third slide"
                                        />
                                        <MDBMask overlay="black-slight" />
                                    </MDBView>
                                </MDBCarouselItem>                        
                            </MDBCarouselInner>                    
                </MDBCarousel> */}

            <MDBContainer>
            <div> 
            
                    {/* <div className="card mb-4 mt-3 wow fadeIn">
                        <div className="card-body text-white text-center py-1 px-8 my-3">
                            <span><h2>Activities</h2></span>
                        </div>
                    </div> */}

                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Goal Reached</h2></span>
                        </div>
                        <span className="pull-right m-2 mt-5">
                            <React.Fragment>
                                <AdminCardSection1/>
                            </React.Fragment>   
                        </span>
                    </div>

                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Team Activities</h2></span>
                        </div>
                        <span className="pull-right m-2">
                            <MDBContainer>   
                                <Label>Team 1</Label>                  
                                <Progress value="25" className="pull-right mt-2 mb-2">25%</Progress>
                                <Label>Team 2</Label>     
                                <Progress value={50} className="pull-right mt-2 mb-2">1/2</Progress>
                                <Label>Team 3</Label>     
                                <Progress value={75} className="pull-right mt-2 mb-2">You're almost there!</Progress>
                                <Label>Team 4</Label>     
                                <Progress color="success" value="100" className="pull-right mt-2 mb-2">You did it!</Progress>
                                <Label>Team 5</Label>     
                                <Progress multi className="pull-right mt-2 mb-2">
                                    <Progress bar value="15">Meh</Progress>
                                    <Progress bar color="success" value="30">Wow!</Progress>
                                    <Progress bar color="info" value="25">Cool</Progress>
                                    <Progress bar color="warning" value="20">20%</Progress>
                                    <Progress bar color="danger" value="5">!!</Progress>
                                </Progress>  
                            </MDBContainer>                                 
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

                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Overall Progress</h2></span>
                        </div>
                        <span className="pull-right">

                            
                        </span>
                    </div>
                </div>
                </MDBContainer>
            </div>
            </React.Fragment>
            
    );
    
    }
}

export default Home;

