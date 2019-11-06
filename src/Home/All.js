import React, { Component} from 'react'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Sider from '../myfiles/Sider'
import Topic from '../myfiles/Topic'

export default class All extends Component {
    render() {
        return (
            <Router>     
                <div>
                    <Switch>
                        <Route path='/home/all/:page' component={Topic}/>
                        <Redirect from='/*' to = '/home/all/1'/>
                    </Switch>
                    <Sider types='all'/>
                </div>
            </Router>
        )
    }
}
