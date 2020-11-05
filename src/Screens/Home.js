import React from 'react';
import CustomButton from '../Components/CustomButton'
import Welcome from '../Components/Welcome'

import { useHistory } from "react-router-dom";

import {withRouter} from 'react-router';

const routeList = [
  {
    name: 'Normal',
    route: 'component/normal'
  },
  {
    name: 'Using Component',
    route: 'component/component'
  },  
  {
    name: 'Use ArrayMap',
    route: 'component/array-map'
  },
]

// outside class function example :
// place it outside when a function doesn't rely on 'this.' 
// to makes it easier to define, read, and test.
function consoleLog() {
  console.log("Hello!")
}

class Home extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  // es 2020 notation example
  showAlert = () => {
    alert('halo')
  }

  // function inside react component
  showAlert2() {
    alert('halo 2')
  }

  pressButton() {
    this.setState((state, props) => ({
      count: state.count +1
    }));
    this.showAlert()
    consoleLog()
  }

  navigateTo(route) {
    this.props.history.push(route);
  }

  render() {
    return (
        <div class="flex flex-col h-full justify-center items-center bg-teal-100">
          {/* Component that doesn't have children can be written like this */}
          <Welcome/> 

          {/* State Example */}
          <p class="font-bold text-3xl text-orange-300 mb-12">Count = {this.state.count}</p>

          {/* Component Example */}
          <CustomButton containerStyle="mb-8" onClick={()=>this.pressButton()} label="Component Example!"></CustomButton>

          {/* List / Array Map Example*/}
          {
            routeList.map((item,index)=>(<CustomButton key={index} containerStyle="mb-4" onClick={()=>this.navigateTo(item.route)} label={item.name}></CustomButton>))
          }
        </div>
    );
  }
}


export default withRouter(Home);
