import React from 'react';
import TeamSubNav from './TeamSubNav';

class Header extends React.Component{
    render(){
        return(
            <section className="card aqua-gradient wow fadeIn  text-uppercase">
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