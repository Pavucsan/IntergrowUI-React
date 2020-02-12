// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './component/App';
// // import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/core/home';
import EmployeeView from './component/employee/employee';
import EmployeeList from './component/employee/employeeList';
import goals from './component/goals/goals';
import App from './component/App';

import Header from './component/core/header';
import Footer from './component/core/footer';
import Notfound from './component/notfoundpage/404notfound';
import Viewhelp from './component/helps/viewhelp';
import ViewTeam from './component/Team/team';


const routing = (
    <Router>
        <div  className="mt-5 pt-3">
            <Switch>
                <Route exact path ='/home' component = {Home}/>
                <Route exact path="/" component={App} />
                <Route path ='/employee' component = {EmployeeView}/>
                <Route path ='/employeelist' component = {EmployeeList}/>
                <Route path ='/goals' component = {goals}/>
                <Route path = '/help' component = {Viewhelp}/>
                <Route path = '/team' component = {ViewTeam}/>
                <Route component = {Notfound}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
