import React from 'react';
import CreateTeam from './sections/TeamCreate';
import Header from './sections/teamHeader';
import TeamView from './sections/TeamView';

class ViewTeam extends React.Component{

    todayDate() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        const currDate =date;
        return (
          <p>{currDate}</p>
        );
      }
    render(){
        return(
            <div>
                <Header/>

                <CreateTeam/>

                <TeamView/>
            </div>
        );
    }
}
export default ViewTeam;