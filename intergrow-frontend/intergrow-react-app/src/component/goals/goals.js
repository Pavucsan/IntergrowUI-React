import React from 'react';
import HeaderGoal from './sections/goalsHeader';
import GoalsView from './sections/goalsView';
import GoalsSetGoals from './sections/goalsSetGoal';


class goals extends React.Component{    
    

    render(){
        return(
            <div className=''>          
                <HeaderGoal/>   

                <GoalsSetGoals/>

                <GoalsView/>
            </div>
        );
    }
}
export default goals;