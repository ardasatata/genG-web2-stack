import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {

    imageLocation() {
        if(this.props.imageRight === true){
        return "lg:flex-row-reverse"
        } else {
        return "lg:flex-row"
        }
    }
  
    renderImage() {
      if (this.props.image===null){
        return (<div class="bg-orange-400 w-full lg:w-2/5 lg:h-screen flex flex-col object-cover">No Image</div>)
      } else {
        return (<img src={this.props.image} className="w-full lg:w-2/5 lg:h-screen flex flex-col object-cover"/>)
      }
    }
  
    renderContent() {
      return (        
        <div className={"flex flex-col lg:flex-1 lg:h-screen justify-center px-24 py-24 " + this.props.backgroundColor}>
          <p className={"font-bold text-4xl "+this.props.textColor}>{this.props.title}</p>
          <p className={"font-normal text-2xl "+this.props.textColor}>{this.props.description}</p>
        </div>
      )
    }
  
    render() {
      return (
        <div className={"flex flex-col " + this.imageLocation()}>
          {this.renderImage()}
          {this.renderContent()}
        </div>
      )
    }
}

export default Section
  
  // Specifies the type of props:
  Section.propTypes = {
    image: PropTypes.object,
    imageRight: PropTypes.bool,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }
  
  // Specifies the default values for props:
  Section.defaultProps = {
    image: null,
    imageRight: false,
    textColor: 'text-gray-500',
    backgroundColor: 'bg-teal-100',
    title: 'Title',
    description: 'Lorem ipsum'
  };