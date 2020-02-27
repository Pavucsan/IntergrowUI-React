import Axios from 'axios';
import { MDBContainer, MDBIcon } from 'mdbreact';
import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { Button, Input, InputGroupText, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_API_URL } from '../../../../constants/utill';
import '../../../../css/team_goal_prog.css';

class GoalProgressView extends React.Component{
    
    constructor(props){
        super(props);   
        this.state={
            goals:[],
            goal_progress:[],
            toggleModal:false,
            newProgress:{
                goal:this.props.idx,
                progress_description:'',
                progress_date:'',

            }
        }
        
    }
    
    
    componentWillMount(){
        this.getGoal();
        this.getGoalProgress(); 
    }
    getGoal(){
        // console.log(this.props.idx);
        Axios.get(COURSE_API_URL + 'team_goal/'+ this.props.idx).then((response) =>{
            // console.log(response.data);
            this.setState({
                goals:response.data
            })
        })
    }
    getGoalProgress(){
        Axios.get(COURSE_API_URL + 'goal/goal_progress/' + this.props.idx).then((response)=>{
            console.log(response.data);
            this.setState({
                goal_progress:response.data
            })
            // if(response.data.goal == this.props.idx){
            //     this.setState({
            //         goal_progress:response.data,
            //     })

            // }
            
        })
    }

    toggle(){
        this.setState({
            toggleModal:true,
        })
    }
    toggleClose(){
        this.setState({
            toggleModal:false,
        })
    }
    render(){
        return(
            // <div className='mr-4 ml-4 mt-3 mb-2 text-align-center #90caf9 blue lighten-3 pt-4'>
            //     <div className='row'>
            //         <MDBContainer className="col-lg-7 col-md-7 col-sm-12 mr-0">
                        
            //         <Jumbotron>
            //             <h1 className="display-5">Progress</h1>
            //           { 
            //           this.state.goal_progress.map((gp) => {
            //               return(
            //                 <div key={gp.id}>
            //                     <hr className="my-2" />
            //                     <p className="lead text-success"><strong>{gp.progress_description}</strong><MDBIcon icon='check'className='pl-2'/></p>
                                
            //               <p> <MDBIcon icon='calendar-alt'/> Progress Date : {gp.progress_date}</p>
            //                     <hr className="my-2" />
            //                 </div>
            //               )

            //           })}  
                      
            //           </Jumbotron>
                        

            //         </MDBContainer>
                
            //         <MDBContainer className=" col-lg-4 col-md-4 col-sm-12 ml-0">
            //             <Jumbotron>
            //                 <h1 className="display-5"></h1>
            //                 <p className="lead">{this.state.goals.goal_discription}</p>
            //                 <hr className="my-2" />
            //                 <p><MDBIcon icon='calendar-alt'/> Start Date : {this.state.goals.start_date}</p>
            //                 <p><MDBIcon icon='calendar-alt'/> End Date : {this.state.goals.end_date}</p>
            //                 <p className="lead">    
            //                 </p>
            //             </Jumbotron>
                        
                           
                        // <Modal isOpen={this.state.toggleModal} toggle={this.toggle.bind(this)}>
                        //     <ModalHeader toggle={this.toggleClose.bind(this)}>Create Goal</ModalHeader>
                        //         <ModalBody>
                        //             <FormGroup addonType="prepend" >
                        //                 <InputGroupText><i className="fas fa-pen mr-2" ></i></InputGroupText>
                        //                 <Input placeholder='Progress Description'
                                        
                        //                 />
                        //             </FormGroup>
                        //             <FormGroup addonType="prepend">
                        //                 <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                        //                 <Input type='date'
                        //                 />
                        //             </FormGroup>
                        //         </ModalBody>
                        //         <ModalFooter>
                        //             <Button color="primary" onClick={this.toggleClose.bind(this)}>Set</Button>
                        //             <Button color="secondary" onClick={this.toggleClose.bind(this)}>Cancel</Button>
                        //         </ModalFooter>
                        // </Modal>                                                    
            //             <Button type="button" className="btn btn-secondary btn-rounded" onClick={this.toggle.bind(this)}>Add Progress</Button>                            
            //         </MDBContainer>
                
            //     </div>
            // </div>

            <div className="container w-100 my-5">
            <section>
                <div className="card">
                <div className="card-header white">
                    <p className="h5-responsive font-weight-bold mb-0"><i className="fas fa-tasks pr-2"></i>Goal</p>
                </div>
                <div className="card-body my-custom-scrollbar">
                    <div className="media">
                    {/* <img className="avatar rounded-circle card-img-64 z-depth-1 d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="Generic placeholder image"/> */}
                    <div className="media-body">
                        <h6 className="mt-0 font-weight-bold"><i className="fas fa-trophy pr-2"></i>{this.state.goals.goal_discription}<span className="small text-muted float-right pr-2"><i className="far fa-clock pr-1"></i>5:25 AM</span></h6>
                        <p className="mb-0 font-weight-light">Start Date :  {this.state.goals.start_date}</p>
                        <p className="mb-0 font-weight-light">End Date   : {this.state.goals.end_date}</p>

                        <div className="media mt-3">
                        <div className="media-body grey lighten-2 p-3 rounded">
                        { 
                            this.state.goal_progress.map((gp) => {
                                return(
                                <div className='pb-3'>
                                    <h6 className="mt-0 font-weight-bold"><MDBIcon icon='check'className='pl-2'/> {gp.progress_description}<span className="small text-muted float-right pr-2"><i className="far fa-clock pr-1"></i>{gp.progress_date}<Button color='warning' className="btn btn-warning btn-sm mb-0 mr-0">Edit</Button></span></h6>
                                    {/* <small className="font-italic">Theme-thumbnail-image.jpg</small> */}
                                    {/* <div className="text-right"> */}
                                    {/* <button className="btn btn-warning btn-sm mb-0 mr-0">Edit</button> */}
                                    {/* </div> */}
                                    <hr/>
                                </div>
                                )
                            })
                        }
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-footer white py-3">
                    <div className="form-group mb-0">
                    {/* <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="2" placeholder="Type message..."></textarea> */}
                    <div className="text-right pt-2">
                        <Button className="btn btn-primary btn-sm mb-0 mr-0" color='primary' onClick={this.toggle.bind(this)}>Set Progress</Button>

                        <Modal isOpen={this.state.toggleModal} toggle={this.toggle.bind(this)}>
                            <ModalHeader toggle={this.toggleClose.bind(this)} >Create Goal</ModalHeader>
                            <ModalBody>
                                <FormGroup addonType="prepend" >
                                    <InputGroupText><i className="fas fa-pen mr-2" ></i></InputGroupText>
                                    <Input placeholder='Progress Description'
                                    
                                    />
                                </FormGroup>
                                <FormGroup addonType="prepend">
                                    <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                    <Input type='date'
                                    />
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleClose.bind(this)}>Set</Button>
                                <Button color="danger" onClick={this.toggleClose.bind(this)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>  
                        


                    </div>
                    </div>
                </div>
                </div>

            </section>

            </div>

            
        )
    }
}
export default GoalProgressView;