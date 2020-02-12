import React from 'react';
import {MDBBtn} from 'mdbreact';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroupText, InputGroupAddon, Input, FormGroup  } from 'reactstrap';
import Axios from 'axios';


const COURSE_API_URL = 'http://localhost:8000/';

class ViewTeam extends React.Component{

    state = {
        teams : [],
        newTeamToggleModal : false,
    }

    componentWillMount(){
        this._refreshTeam();        
    }
    _refreshTeam(){
        Axios.get(COURSE_API_URL + 'teams/').then((response) => {
            this.setState({
                teams : response.data,
            })
        });        
    }
    newTeamToggle(){
        this.setState({
            newTeamToggleModal:true,
        });
    }
    closeTeamToggle(){
        this.setState({
            newTeamToggleModal:false,
        });
    }   
    render(){

        let newTeam = this.state.teams.map((team)=>{
            return(
                <Modal isOpen={this.state.newTeamToggleModal} toggle={this.newTeamToggle.bind(this)}>
                        <ModalHeader onClick = {this.newTeamToggle.bind(this)}>Create Team</ModalHeader>
                        <ModalBody>
                        {/* <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i class="fas fa-user mr-2" ></i></InputGroupText>
                                <Input placeholder="Mentee" value={this.state.newHelpData.mentee} onChange={(e) =>
                                {
                                    let { newHelpData } = this.state;
    
                                    newHelpData.mentee = e.target.value;
    
                                    this.setState({ newHelpData });
    
                                }} />
                            </InputGroupAddon>
                        </FormGroup>                                     */}
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" rounded>Post</Button>
                    <Button color="danger" rounded onClick = {this.closeTeamToggle.bind(this)} >Cancel</Button>
                    </ModalFooter>
                </Modal>                
            );
        });
        const titleTeam = (() => {
            // <div class="card-body text-white text-center py-1 px-8 my-3">
            //     <h1 class="mb-4">
            //         <strong>Team</strong>
            //     </h1>
            //     <p>
            //         <strong>Create Team & achive the goal</strong>
            //     </p>
            // </div>           
        });

        return(
            <main>
                <section class="card aqua-gradient wow fadeIn  text-uppercase">
                    {/* {titleTeam} */}
                    <div class="card-body text-white text-center py-1 px-8 my-3">
                        <h1 class="mb-4">
                            <strong>Team</strong>
                        </h1>
                        <p>
                            <strong>Create Team & achive the goal</strong>
                        </p>
                    </div>   
                </section>
                <section>
                        {/* <MDBContainer> */}
                            <div className="card mb-4 mt-2 pt-2 pb-2 text-center wow fadeIn">
                                <span className="pull-right">
                                <MDBBtn 
                                color = 'primary'
                                
                                className={'btn btn-info'}
                                onClick = {this.newTeamToggle.bind(this)}
                                rounded 
                                >
                                    <i class="fas fa-plus mr-2" ></i>Create Team</MDBBtn>
                                </span>
                                {newTeam}
                            </div>
                        {/* </MDBContainer> */}

                        <div>
                            {/* {newHelp} */}
                        </div>
                </section>
                <div class="container px-5">
                    <section>
                        {/* <MDBContainer> */}
                        <div className="card mb-4 mt-2 pt-2 pb-2 wow fadeIn">

                        </div>
                    </section>                        
                </div>
            </main>
        );
    }
}
export default ViewTeam;