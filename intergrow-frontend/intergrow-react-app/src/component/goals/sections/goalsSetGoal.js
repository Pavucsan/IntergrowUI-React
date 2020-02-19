import React from 'react';
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MDBBtn } from 'mdbreact';

class GoalsSetGoals extends React.Component{
    state = {
        goals:[],
        setGoalModal:false
    }
    createGoal(){
        this.setState({
            setGoalModal:false,
        })
    }
    setGoalToggle(){
        this.setState({
            setGoalModal:true,
        })
    }
    closeToggle(){
        this.setState({
            setGoalModal:false,
        })
    }

    render(){
        return(
            <section>
                <div className="card mb-2 mt-2 pt-2 pb-2 text-center wow fadeIn">
                    <span className="pull-right">

                    <MDBBtn 
                    color = 'primary'                                
                    className={'btn btn-info'}
                    onClick = {this.setGoalToggle.bind(this)}
                    >
                        <i className="fas fa-plus mr-2" ></i>Set Goals</MDBBtn>
                    </span>
                    <Modal isOpen={this.state.setGoalModal} toggle={this.setGoalToggle.bind(this)}>    
                    <ModalHeader toggle={this.closeToggle.bind(this)}>Create Employee Profile</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                                <Input placeholder="Team Id" 
                                // value={this.state.setGoalModal.employee_id} 
                                // onChange={(e) =>
                                // {
                                //     let { newEmployeeData } = this.state;

                                //     newEmployeeData.employee_id = e.target.value;

                                //     this.setState({ newEmployeeData });

                                // }} 
                                />
                            </InputGroupAddon>
                        </FormGroup>                                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.createGoal.bind(this)}>Set</Button>
                        <Button color="secondary" onClick={this.closeToggle.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal> 
                </div>
            </section>    
        )
    }
}
export default GoalsSetGoals;