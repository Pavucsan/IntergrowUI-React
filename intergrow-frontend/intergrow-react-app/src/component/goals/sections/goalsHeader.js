import React from 'react';
import { TITLE_COLOR } from '../../../constants/utill';

class HeaderGoal extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-3 px-8 my-0">
                    <h1 className="mb-4">
                        <strong>Team Goals</strong>
                    </h1>
                    <p>
                        <strong>set goals & achive the targer</strong>
                    </p>
                </div>  
            </section>
        )
    }
}
export default HeaderGoal;