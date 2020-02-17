import React from 'react';
import { MDBCard, Link, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';


class AdminCardSection1 extends React.Component{
  render(){
    let countHelp = this.props.help.length;
    let countResponses = this.props.responses.length;
    let countTeams = this.props.teams.length;
    let countEmployees = this.props.employees.length;


    return (
      <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r"  onClick='route'>            
          <Link to={"/help/"} >  
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon icon="hands-helping" className="primary-color"/>
                  <div className="data">
                    <p>Helps</p>
                    <h4>
                      <strong>{countHelp}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                      style={{width: '25%'}}></div>
                  </div>
                  <MDBCardText>Better than last week (25%)</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Link>
          </MDBCol>
          <MDBCol xl="3" md="6" className="mb-r">
            <Link to={"/help/"} >  
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon icon="american-sign-language-interpreting" className="warning-color"/>
                  <div className="data">
                    <p>Responses</p>
                    <h4>
                      <strong>{countResponses}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                      style={{width: '25%'}}></div>
                  </div>
                  <MDBCardText>Worse than last week (25%)</MDBCardText>
                </MDBCardBody>
              </MDBCard>
              </Link>
          </MDBCol>
          <MDBCol xl="3" md="6" className="mb-r">
            <Link to='/teams/'>
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon icon="people-carry" className="light-blue lighten-1"/>
                  <div className="data">
                    <p>Teams</p>
                    <h4>
                      <strong>{countTeams}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                      style={{width: '75%'}}></div>
                  </div>
                  <MDBCardText>Worse than last week (75%)</MDBCardText>
                </MDBCardBody>
              </MDBCard>
              </Link>
          </MDBCol>
          <MDBCol xl="3" md="6" className="mb-r">
            <Link to='employees'>
            <MDBCard className="cascading-admin-card">
                <div className="admin-up">
                <MDBIcon icon="users" className="red accent-2"/>
                  <div className="data">
                    <p>Employees</p>
                    <h4>
                      <strong>{countEmployees}</strong>
                    </h4>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="progress">
                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                      style={{width: '25%'}}></div>
                  </div>
                  <MDBCardText>Better than last week (25%)</MDBCardText>
                </MDBCardBody>
              </MDBCard>
              </Link>
          </MDBCol>
        </MDBRow>
    )
  }
}
export default AdminCardSection1;

