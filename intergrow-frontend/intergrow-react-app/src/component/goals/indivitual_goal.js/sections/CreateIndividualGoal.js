import React from 'react';
import { MDBBtn, MDBContainer } from 'mdbreact';
import { Badge, Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, ToastBody, ToastHeader, Collapse, Alert } from 'reactstrap';




class CreateIndividualGoal extends React.Component{

    constructor(props){
        super(props);        
    }
    render(){
        
        return(
            <section>
                {/* <div className=" mb-2 mt-2 pt-2 pb-2  wow fadeIn"> */}
                <MDBContainer className="card p-1 mt-4" style={{
                    display: "flex",
                    // justifyContent: "left",
                    alignItems: "left",
                    backgroundColor:"rgb(175, 200, 209)"
                    }}>

                    <span className="pull-right">
                    <MDBBtn 
                    color = 'primary'                        
                    className={'btn btn-info'}
                    rounded 
                    >
                        <i className="fas fa-plus mr-2" ></i>Add Goal</MDBBtn>
                    </span>

                </MDBContainer>
            </section>
        )
    }
}
export default CreateIndividualGoal;