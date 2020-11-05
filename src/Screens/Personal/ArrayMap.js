import React from 'react';

import Section from './Component/Section'
import sectionList from './sectionList'

class ArrayMap extends React.Component {  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col">
        {
          sectionList.map((item,index)=>(
            <Section 
            image={item.image} 
            imageRight={item.imageRight} 
            title={item.title} 
            description={item.description} 
            textColor={item.textColor} 
            backgroundColor={item.backgroundColor}>
            </Section>))
        }
      </div>
    );
  }
}


export default ArrayMap;
