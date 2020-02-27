import React from 'react';
import TeamSubNav from './TeamSubNav';
import { TITLE_COLOR } from '../../../constants/utill';

class Header extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-1 px-8 my-3">
                    <h1 className="mb-4">
                        <strong>Team</strong>
                    </h1>
                    <p>
                        <strong>Create Team & achive the goal</strong>
                    </p>
                </div>  
                {/* <TeamSubNav/> */}
            </section>
        )
    }
}
export default Header;