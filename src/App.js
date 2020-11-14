import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './Screens/Home'
import About from './Screens/About'

import Normal from './Screens/Personal/Normal'
import Component from './Screens/Personal/Component'
import ArrayMap from './Screens/Personal/ArrayMap'

import Profile from './Screens/GithubProfile/Profile'

const personalExample = [
  {
    id: "normal",
    component: Normal
  },
  {
    id: "component",
    component: Component
  },
  {
    id: "array-map",
    component: ArrayMap
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Web II - Summer Club"
    };
  }

  render() {
    return (
      // ToDo : convert it to Router Component
      <div className="flex flex-col h-screen">
        <Router>
            <Switch>
              {/* This is the example to iterate the route component instead of write it one by one */}
              {personalExample.map(({id, component})=>(
                <Route path={`/component/${id}`} component={component}/>
              ))}
              <Route path="/github/profile">
                <Profile />
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
