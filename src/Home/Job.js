import React, { Component} from 'react'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Sider from '../myfiles/Sider'
import Topic from '../myfiles/Topic'

export default class Job extends Component {
    render() {
        return (
            <Router>     
                <div>
                    <Switch>
                        <Route path='/home/job/:page' component={Topic}/>
                        <Redirect from='/*' to = '/home/job/1'/>
                    </Switch>
                    <Sider types='job'/>
                </div>
            </Router>
        )
    }
}



