import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import axios from 'axios';

import {COURSE_API_URL} from '../../constants/utill';

class EmployeeView extends React.Component {

    constructor()
    {
        super();
    }
    state = {
        employees: []         
    }

// Initial stage
    componentWillMount()
    {
        this._refreshProject();
    }

    _refreshProject()
    {
        axios.get(COURSE_API_URL + 'empoyees/').then((response) =>
        {
            this.setState({
                employees: response.data
            })
            console.log(this.state.employees);
        });

    }
// End

    render()
    {
        let employeeRaw = this.state.employees.map((employee) =>
        {    
            return (
                <tr key={employee.employee_id}>
                    {/* contenteditable="true" */}
                    <td className="pt-3-half" >{employee.employee_id}</td>
                    <td className="pt-3-half" >{employee.first_name}</td>
                    <td className="pt-3-half" >{employee.email}</td>
                    <td className="pt-3-half" >{employee.phone_number}</td>
                    <td className="pt-3-half">
                        {/* <span className="table-remove"><button type="button"
                            className="btn btn-warning btn-rounded btn-sm my-0" onClick={this.editProject.bind(this, project.projectId, project.projectName, project.start_date, project.end_date, project.discription)}>Edit</button></span> */}
                    <span className="table-remove"><button type="button"
                            className="btn btn-warning btn-rounded btn-sm my-0">Edit</button></span>
                    </td>
                    <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                    </td>
                </tr>
            )
        });
    

        return (

            <div className="full">
                <section class="card aqua-gradient wow fadeIn  text-uppercase">
                {/* <!-- Content --> */}
                <div class="card-body text-white text-center py-1 px-8 my-3">
                    <h1 class="mb-4">
                        <strong>Emloyees</strong>
                    </h1>
                    <p>
                        <strong>Join with intergrow activities</strong>
                    </p>
                </div>
                {/* <!-- Content --> */}
                </section>
                <section>
                    <div className="card mb-4 mt-2 pt-2 pb-2 wow fadeIn text-center">

                        <span className="pull-right">
                        <MDBBtn rounded href="/employeelist" className={'btn btn-info'} style = {{'background-color':'blue'}}><i class="fas fa-list mr-2" ></i>Employee List</MDBBtn>
                        </span>
                    </div>
                </section>

                <div class="container px-5">
                    <section class="pt-5">
                    </section>
                </div>
                </div>

        );
    }
}
export default EmployeeView;



