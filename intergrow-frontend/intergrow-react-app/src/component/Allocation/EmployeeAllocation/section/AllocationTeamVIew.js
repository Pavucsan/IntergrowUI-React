import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Input, InputGroupText, ModalFooter } from 'reactstrap';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../../constants/utill';

class AllocationTeamView extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            team:[],
            leader:[],
            allocations:[],

            newEmpAllocation:[],
            createModal:false,
        }
    }
    componentWillMount(){
        this.getTeam();
        this.getMember();
    }

    getTeam(){
        Axios.get(COURSE_API_URL + 'team/' + this.props.idx).then((response) => {
            // console.log(response.data);
            this.setState({
                team:response.data,
            })
            Axios.get(COURSE_API_URL + `employee/${response.data.leader}`).then((lead) =>{
                // console.log(lead.data.first_name)
                this.setState({
                    leader:lead.data,
                })
            })
        })
    }
    getMember(){
        Axios.get(COURSE_API_URL + 'team_employee_allocation/team/' + this.props.idx).then((response) =>{
            console.log(response.data);
            this.setState({
                allocations:response.data,
            })
        })
    }

    // addMember(){
    //     Axios.post(COURSE_API_URL + 'team_employee_allocation/')
    // }

    toggle(){
        this.setState({
            createModal:true,
        })
    }
    toggleClose(){
        this.setState({
            createModal:false,
        })
    }
    

    render(){
        return(
            <div class=" my-3 py-3 px-md-5 ">
                <div className="card card-header z-depth-3" color="white">
        <span><h2><strong>Team : {this.state.team.team_name}</strong>
                <span className="small text-muted float-right">
                    <Button color="primary" onClick={this.toggle.bind(this)}><i className="fas fa-plus pr-1"></i></Button></span>
                </h2></span>
                </div>
                <section class="card text-lg-left dark-grey-text my-2 pl-3">  
                    <div class="media d-block d-md-flex mt-3">                        
                        <img class="card-img-64 rounded z-depth-1 d-flex mb-2"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image"/>
                    <div class="media-body text-md-left ml-md-3 ml-0">
                        <p class="font-weight-bold my-0 uppercase">
                            Leader : {this.state.leader.first_name + ' ' + this.state.leader.last_name}
                        </p>  
                    </div>
                    </div>                    
                </section>
                {
                    this.state.allocations.map((alloc) => {
                        return(
                            <section class="card text-lg-left dark-grey-text my-2 pl-3 zoom">  
                                <div class="media d-block d-md-flex mt-3">                        
                                    <img class="card-img-64 rounded z-depth-1 d-flex mb-4"
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image"/>
                                    <div class="media-body text-md-left ml-md-3 ml-0">
                                        <div class="font-weight-bold my-0">
                                            <div>
                                            Member : {alloc.member_id.first_name} 
                                            </div>
                                            <div>
                                            Assign Date : {alloc.start_date} <br/>
                                            </div>
                                            <div>
                                            End Date : {alloc.end_date} 
                                            </div>
                                        </div>  
                                        <span className="small text-muted float-right pr-2">
                                            <Button color="warning"><i className="fas fa-edit pr-1 zoom"></i></Button>
                                            </span>
                                    </div>
                                </div>                    
                            </section>
                        )
                    })
                }
                <Modal isOpen={this.state.createModal} toggle={this.toggle.bind(this)}>
                            <ModalHeader toggle={this.toggleClose.bind(this)} >Add member</ModalHeader>
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
                                <Button color="primary" onClick={this.toggleClose.bind(this)}>Add</Button>
                                <Button color="danger" onClick={this.toggleClose.bind(this)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>  
                
        </div>
        );
    }
}
export default AllocationTeamView;