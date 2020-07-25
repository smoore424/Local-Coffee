import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/MenuComponent'
import { MENUITEMS } from './shared/menuitems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: MENUITEMS
    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            {/* <Main /> */}
            <Menu menuitems={this.state.menuitems} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
