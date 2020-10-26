import React from 'react';

class CustomButton extends React.Component {
  render() {
    return (
        <div>
            <button onClick={this.props.onClick} className="flex focus:outline-none shadow-none bg-white hover:bg-teal-300 text-blue-900 px-6 py-2 rounded-full font-semibold text-xl"> 
            {this.props.label}
            </button>
        </div>
    )
  }
}

export default CustomButton