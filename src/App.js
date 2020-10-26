import React from 'react';
import CustomButton from './Component/CustomButton'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './Screen/Home'
import About from './Screen/About'

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      time: "Halo niece and nephew"
    };
  }

  render() {
    return (
      <Router>
      <div className="flex flex-col h-screen ">
        <div class="h-24 flex flex-row items-center">
          <div className="flex w-1/3 px-4 py-4">{this.state.time}</div>
          <div className="flex ml-auto px-8 font-bold w-2/5 justify-around">
            <Link to="/" className="flex text-blue-600 hover:text-teal-300 cursor-pointer">About Us</Link>
            <Link to="/about" className="flex text-blue-600 hover:text-teal-300 cursor-pointer">News</Link>
            {/* <Link className="flex hover:text-teal-300 text-blue-600 cursor-pointer">Contact</Link> */}
          </div>
        </div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
