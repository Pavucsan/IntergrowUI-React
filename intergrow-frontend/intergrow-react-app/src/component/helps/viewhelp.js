import React, {useState} from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer} from 'mdbreact';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroupText, InputGroupAddon, Input, FormGroup  } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';


import {COURSE_API_URL} from '../../constants/utill';
import { Redirect } from 'react-router';
import HelpHeader from './sections/helpHeader';
import HelpView from './sections/HelpView';


class Viewhelp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            helps:[],
            newHelpData:{
                id:'',
                mentee:'',
                help_discription:'',
                help_date:''
            },
            newHelpToggleModal:false,
            
        }
    }

    // helpActions = new HelpActions();
    _refreshHelps(){
        axios.get(COURSE_API_URL + 'helps/').then((response) => {
            this.setState({
                helps: response.data
            });
        });
    }

    // add new team
    createHelp(){
        axios.post(COURSE_API_URL + 'helps/', this.state.newHelpData).then((response) => {

            console.log(response.data);
            let {helps} = this.state;
            helps.push(response.data);

            this.setState({
                newHelpData:false,
                helps,

                mentee:'',
                help_discription:'',
                help_date:'',
                newHelpToggleModal:false,
            });
            
        });
    }
    
    componentWillMount(){
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
        }
        else{
            this.setState({redirect:true})
        }
        this._refreshHelps();
        // this.helpActions._refreshHelps();
    }

    newHelpToggle(){
        this.setState({
            newHelpToggleModal:true
        });
    }
    helpToggleClose(){
        this.setState({
            newHelpToggleModal:false
        });
    }


    render(){

        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }
        
        let helpRaw = this.state.helps.map((help) =>
        {    
            return (               
               
                <tr key={help.id}>
                    {/* contenteditable="true" */}
                    <td className="pt-3-half" >{help.mentee}</td>
                    <td className="pt-3-half" >{help.help_discription}</td>
                    <td className="pt-3-half" >{help.help_date}</td>
                </tr>
            )
        });

        let viewAllHelp = this.state.helps.map((help)=>{
            return(
                <div className="p-1 #bbdefb blue lighten-4 my-2 mr-2 ml-2 rounded">
                    <MDBContainer className='card'>
                        {/* <ToastHeader>
                            {help.}
                        </ToastHeader> */}
                        <ToastBody>
                            {help.help_discription}
                        </ToastBody>                        
                    </MDBContainer>
                    
                        <MDBBtn 
                            color = 'primary'
                            // onClick = {this.newHelpToggle.bind(this)}
                            rounded 
                            >Show Responses</MDBBtn>
                        <MDBBtn 
                            color = 'primary'
                            // onClick = {this.newHelpToggle.bind(this)}
                            rounded 
                            >Give Response</MDBBtn>
                    <hr/>
              </div>
            );
        });

        let newHelp = this.state.helps.map((help)=>{
            return(
                <Modal isOpen={this.state.newHelpToggleModal} toggle={this.newHelpToggle.bind(this)}>
                        <ModalHeader onClick = {this.helpToggleClose.bind(this)}>Ask help..</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i class="fas fa-user mr-2" ></i></InputGroupText>
                                <Input placeholder="Mentee" value={this.state.newHelpData.mentee} onChange={(e) =>
                                {
                                    let { newHelpData } = this.state;

                                    newHelpData.mentee = e.target.value;

                                    this.setState({ newHelpData });

                                }} />
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i class="fas fa-prescription-bottle mr-2" ></i></InputGroupText>
                                <Input type='textarea' placeholder="Discription" value={this.state.newHelpData.help_discription} onChange={(e) =>
                                {
                                    let { newHelpData } = this.state;

                                    newHelpData.help_discription = e.target.value;

                                    this.setState({ newHelpData });

                                }} />
                            </InputGroupAddon>
                        </FormGroup>  
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i class="fas fa-prescription-bottle mr-2" ></i></InputGroupText>
                                <Input type='date' placeholder="Date" value={this.state.newHelpData.help_date} onChange={(e) =>
                                {
                                    let { newHelpData } = this.state;

                                    newHelpData.help_date = e.target.value;

                                    this.setState({ newHelpData });

                                }} />
                            </InputGroupAddon>
                        </FormGroup>                                    
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" rounded onClick = {this.createHelp.bind(this)}>Post</Button>{' '}
                    <Button color="danger" rounded onClick = {this.helpToggleClose.bind(this)} >Cancel</Button>
                    </ModalFooter>
                </Modal>
                
            );
        });


        return(
            <main class="">

                <HelpHeader/>             
                    
                
                <section>
                    {/* <MDBContainer> */}
                        <div className="card mb-4 mt-2 pt-2 pb-2 text-center wow fadeIn">
                            <span className="pull-right">
                            <MDBBtn 
                            color = 'primary'
                            
                            className={'btn btn-info'}
                            onClick = {this.newHelpToggle.bind(this)}
                            rounded 
                            >
                                <i class="fas fa-paw mr-2" ></i>Ask Help</MDBBtn>
                            </span>
                        </div>
                    {/* </MDBContainer> */}
                    <div>
                        {newHelp}
                    </div>
                </section>
                <div class="container px-5">
                    {/* <section>
                        <div className="mb-4 mt-2 pt-2 pb-2 wow fadeIn">
                            {viewAllHelp}   
                        </div>
                    </section>                         */}
                    <HelpView/>
                </div>
            </main>
        )
    }


}

export default Viewhelp;