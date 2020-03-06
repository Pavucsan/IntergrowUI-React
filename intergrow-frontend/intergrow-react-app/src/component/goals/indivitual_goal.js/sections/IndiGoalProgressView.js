import { MDBContainer, MDBIcon } from 'mdbreact';
import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { COURSE_API_URL } from '../../../../constants/utill';
import Axios from 'axios';



class IndiGoalProgressView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            individual_goal_progress:[],
            modalEdit:false,

        }
    }
    componentDidMount(){
        this.indGoalProgress();
    }
    indGoalProgress(){
        
        Axios.get(COURSE_API_URL + 'goal/individual_goal_progress/' + this.props.idx).then((response) =>{
            console.log(response.data);
            this.setState({
                individual_goal_progress:response.data,
            })
                
        })
    }
    toggleEdit(id){
        console.log(id)
        this.setState({
            modalEdit:true
        })
    }
    closeToggle(){
        this.setState({
            modalEdit:false
        })
    }
    
    render(){
        return(
            <div className="container w-100 my-5">
            <section>
                <div className="card">
                <div className="card-header white">
                    <p className="h5-responsive font-weight-bold mb-0"><i className="fas fa-tasks pr-2"></i>Individual Goal Progress</p>
                </div>
                <div className="card-body my-custom-scrollbar">
                    <div className="media">
                    {/* <img className="avatar rounded-circle card-img-64 z-depth-1 d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="Generic placeholder image"/> */}
                    <div className="media-body">
                        <h6 className="mt-0 font-weight-bold"><i className="fas fa-trophy pr-2"></i>
                        {/* {this.state.goals.goal_discription} */}
                        <span className="small text-muted float-right pr-2"><i className="far fa-clock pr-1"></i>5:25 AM</span></h6>
                        <p className="mb-0 font-weight-light">Start Date :  
                        {/* {this.state.goals.start_date} */}
                        </p>
                        <p className="mb-0 font-weight-light">End Date   :
                         {/* {this.state.goals.end_date} */}
                         </p>

                        <div className="media mt-3">
                        <div className="media-body grey lighten-2 p-3 rounded">
                        { 
                            this.state.individual_goal_progress.map((gp) => {
                                return(
                                <div className='pb-3'>
                                    <h6 className="mt-0 font-weight-bold">
                                        <MDBIcon icon='check' className='pl-2'/> 
                                        {gp.progress_description}
                                        <span className="small text-muted float-right pr-2">
                                            <i className="far fa-clock pr-1"></i>
                                            {gp.progress_date}
                                            <Button color='warning' className="btn-sm mb-0 ml-2 m-0 p-2" onClick={() => this.toggleEdit(gp.id)}><MDBIcon icon={'edit'}/></Button>
                                        </span>
                                    </h6>
                                    {/* <small className="font-italic">Theme-thumbnail-image.jpg</small> */}
                                    {/* <div className="text-right"> */}
                                    {/* <button className="btn btn-warning btn-sm mb-0 mr-0">Edit</button> */}
                                    {/* </div> */}
                                    <hr/>
                                </div>
                                )
                            })
                        } 
                        <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit.bind(this)}>
                            <ModalHeader>Edit Progress</ModalHeader>
                            <ModalFooter>
                                <Button color={'primary'} className={'btn-sm'}>Update</Button>
                                <Button color={'danger'} className={'btn-sm'} onClick={this.closeToggle.bind(this)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </section>  
        </div>

        )
    }
}
export default IndiGoalProgressView;