import React from 'react';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../constants/utill';

class GoalsView extends React.Component{
    state={
        goals:[],
    }
    componentWillMount(){
        this.getGols();
    }
    getGols(){
        Axios.get(COURSE_API_URL + 'team_goals/').then((response) =>{
            console.log(response.data);
        })
    }
    render(){
        return(
            <section>
            <div className="card p-4" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:"rgb(175, 200, 209)"
                }}>
                {/* {viewTeam} */}
            </div>
        </section>      
        )
    }
}
export default GoalsView;