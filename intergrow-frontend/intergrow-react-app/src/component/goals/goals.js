import React from 'react';
import HeaderGoal from './sections/goalsHeader';
import { MDBBtn } from 'mdbreact';
import { Modal, Table, Button, ModalHeader, ModalBody, ModalFooter, InputGroup, Label, InputGroupText, InputGroupAddon, Input, FormGroup } from 'reactstrap';


class goals extends React.Component{    
    state = {
        setGoalModel:false
    }
    createGoal(){
        this.setState({
            setGoalModel:false,
        })
    }
    setGoalToggle(){
        this.setState({
            setGoalModel:true,
        })
    }
    closeToggle(){
        this.setState({
            setGoalModel:false,
        })
    }

    render(){

        let setGoalForm = () =>{
            return(
                <div className="card mb-4 mt-2 pt-2 pb-2 wow fadeIn text-center">
                            <span className="pull-right">
                                {/* <MDBBtn href="/employee" className={'btn btn-info'} style = {{'background-color':'blue'}}><i class="fas fa-eye mr-2" ></i>Employee View</MDBBtn> */}
                                <MDBBtn onClick={this.setGoalModel.bind(this)} className={'btn btn-info'}><i class="fas fa-plus mr-2"></i>Set Goal</MDBBtn>
                                <Modal isOpen={this.state.setGoalModel} toggle={this.setGoalToggle.bind(this)}>      

                                    <ModalHeader toggle={this.closeToggle.bind(this)}>Create Employee Profile</ModalHeader>
                                    <ModalBody>
                                        <FormGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                                                <Input placeholder="Team Id" 
                                                // value={this.state.setGoalModel.employee_id} 
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
                            </span>
                        </div> 
            )
        }




        return(
            <div className='full'>          
                <HeaderGoal/>
                
                <section>
                        {/* <MDBContainer> */}
                            <div className="card mb-2 mt-2 pt-2 pb-2 text-center wow fadeIn">
                                <span className="pull-right">
                                <MDBBtn 
                                color = 'primary'
                                
                                className={'btn btn-info'}
                                onClick = {this.setGoalToggle.bind(this)}
                                >
                                    <i className="fas fa-plus mr-2" ></i>Set Goals</MDBBtn>
                                </span>
                                {setGoalForm}
                            </div>
                        {/* </MDBContainer> */}
                        <div>
                            {setGoalForm}
                        </div>
                </section>
                {/* <div className="container px-5"> */}
                <section>
                    {/* <MDBContainer> */}
                    <div className="card p-4" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgb(175, 200, 209)"
                        }}>
                        {/* {viewTeam} */}
                    </div>
                    
                    {/* {pagi} */}
                </section>                        
                {/* </div> */}
            </div>
        );
    }
}
export default goals;