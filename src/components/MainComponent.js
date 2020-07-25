import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent'
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import { MENUITEMS } from '../shared/menuitems';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuitems: MENUITEMS,
        }
        
    }
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exaact path='/menu' render={() => <Menu menuitems={this.state.menuitems} />}  />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);