import React from 'react';
import CustomButton from './Components/CustomButton'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './Screens/Home'
import About from './Screens/About'
import Normal from './Screens/Personal/Normal'
import Component from './Screens/Personal/Component'

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      title: "Web II - Summer Club"
    };
  }

  render() {
    return (
      <div className="flex flex-col h-screen">
        <Router>
            <Switch>
              <Route path="/personal">
                <Normal />
              </Route>
              <Route path="/personal2">
                <Component />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
