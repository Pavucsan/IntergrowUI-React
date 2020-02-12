// import React from 'react';

// function footer(){
//     return(
//         <div>
//             <h1>
//                 Footer
//             </h1>
//         </div>
//     );
// }

// export default footer;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol >
            <h5 className="title">Intergrow Content</h5>
            <p>
              You can join with our communitiy with via social media...
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title" style={{float:'left'}}>Social media</h5>
            <ul >
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><i class="fa fa-facebook mr-3"></i>Facebook</a>
              </li>
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><i class="fa fa-twitter mr-3"></i>Twitter</a>
              </li>
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><i class="fas fa-home mr-3"></i>Youtube</a>
              </li>
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><i class="fas fa-home mr-3"></i>LinkedIn</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default footer;