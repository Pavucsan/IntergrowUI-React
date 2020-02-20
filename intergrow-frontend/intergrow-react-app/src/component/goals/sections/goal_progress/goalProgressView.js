import React from 'react';
import { MDBContainer, MDBIcon } from 'mdbreact';
import { Jumbotron, Button } from 'reactstrap';

class GoalProgressView extends React.Component{
    render(){
        return(
            <div className='mr-4 ml-4 mt-3 mb-2 text-align-center #90caf9 blue lighten-3 pt-4'>
                <div className='row'>
                <MDBContainer className="col-lg-7 col-md-7 col-sm-12 mr-0">
                    <Jumbotron>
                        <h1 className="display-5">Progress</h1>
                        
                        <hr className="my-2" />
                        <p className="lead">Goal Discription</p>
                        
                        <p> <MDBIcon icon='calendar-alt'/> Start Date : </p>
                        <p><MDBIcon icon='calendar-alt'/> End Date :  </p>
                        <hr className="my-2" />
                        <hr className="my-2" />
                        <p className="lead">Goal Discription</p>
                        
                        <p> <MDBIcon icon='calendar-alt'/> Start Date : </p>
                        <p><MDBIcon icon='calendar-alt'/> End Date :  </p>
                        <hr className="my-2" />
                        {/* <p className="lead">                            
                        <Button type="button" class="btn btn-secondary btn-rounded">Add Progress</Button>
                        </p> */}
                    </Jumbotron>
                </MDBContainer>
                <MDBContainer className=" col-lg-4 col-md-4 col-sm-12 ml-0">
                    <Jumbotron>
                        <h1 className="display-5">Goal Name</h1>
                        <p className="lead">Goal Discription</p>
                        <hr className="my-2" />
                        <p><MDBIcon icon='calendar-alt'/> Start Date : </p>
                        <p><MDBIcon icon='calendar-alt'/> End Date : </p>
                        <p className="lead">                            
                        <Button type="button" class="btn btn-secondary btn-rounded">Add Progress</Button>
                        </p>
                    </Jumbotron>
                </MDBContainer>
                </div>
            </div>

            
        )
    }
}
export default GoalProgressView;