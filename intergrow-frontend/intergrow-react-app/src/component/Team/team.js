import React from 'react';
import CreateTeam from './sections/TeamCreate';
import Header from './sections/teamHeader';
import TeamView from './sections/TeamView';
import { COURSE_API_URL } from '../../constants/utill';
import Axios from 'axios';
import { Redirect } from 'react-router';


class ViewTeam extends React.Component{
    state = {
        teams : [],
        employees:[],
        redirect:false,
    }
    componentWillMount(){
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
        }
        else{
        this.setState({redirect:true})
        }

        this.getEmployee();
    }
    getEmployee(){
        Axios.get(COURSE_API_URL + 'employees/').then((response) =>{
            // console.log(response.data);
            this.setState({
                employees : response.data,
            })
        })
    }

    todayDate() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        const currDate =date;
        return (
          <p>{currDate}</p>
        );
      }
    render(){
        
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }
        return(
            <div>
                <Header/>

                <CreateTeam employees={this.state.employees}/>

                <TeamView/>
            </div>
        );
    }
}
export default ViewTeam;