import React from 'react';
import HeaderGoalProgress from './sections/goal_progress/goalProgressHeader';
import GoalProgressView from './sections/goal_progress/goalProgressView';


class GoalProgress extends React.Component{    
    

    render(){
        return(
            <div className=''>   
                <HeaderGoalProgress/> 

                <GoalProgressView/>
            </div>
        );
    }
}
export default GoalProgress;