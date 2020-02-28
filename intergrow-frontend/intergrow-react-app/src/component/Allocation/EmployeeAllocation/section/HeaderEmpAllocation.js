import React from 'react';
import { TITLE_COLOR } from '../../../../constants/utill';

class Header extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-3 px-8 my-0">
                    <h1 className="mb-4">
                        <strong>employee Allocation</strong>
                    </h1>
                    <p>
                        <strong>Allocate employee to the team</strong>
                    </p>
                </div>  
            </section>
        )
    }
}
export default Header;