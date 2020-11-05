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
import ArrayMap from './Screens/Personal/ArrayMap'

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
    id: "arrayMap",
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
      <div className="flex flex-col h-screen">
        <Router>
            <Switch>
              {/* This is the example to iterate the route component instead of write it one by one */}
              {personalExample.map(({id, component})=>(
                <Route path={`/personal/${id}`} component={component}/>
              ))}
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
