import React from 'react';
import { TITLE_COLOR } from '../../../constants/utill';

class TeamDetailHeader extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-1 px-8 my-3">
                    <h1 className="mb-4">
                        <strong>Team Detail</strong>
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
export default TeamDetailHeader;