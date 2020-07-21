import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main);