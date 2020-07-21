import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);