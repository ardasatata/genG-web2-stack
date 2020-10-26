import React from 'react';
import CustomButton from '../Component/CustomButton'

class Home extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // es 2020 notation
  showAlert = () => {
    alert('halo')
  }

  // 
  showAlert2() {
    alert('halo 2')
  }

  pressButton() {
    this.setState((state, props) => ({
      count: state.count +1
    }));
  }

  render() {
    return (
      <div className="flex flex-col h-full justify-center items-center bg-red-100">
        <p class="font-bold text-3xl text-teal-700 mb-12">NEWS!</p>
        <CustomButton label="Sup?"></CustomButton>
    </div>
    );
  }
}


export default Home;
