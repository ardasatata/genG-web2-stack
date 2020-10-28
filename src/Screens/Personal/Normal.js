import React from 'react';
import CustomButton from '../../Components/CustomButton'
import Welcome from '../../Components/Welcome'

import lauren1 from '../../Assets/1.jpg'
import lauren2 from '../../Assets/2.gif'
import lauren3 from '../../Assets/3.jpg'

class Normal extends React.Component {  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col">
        <div class="flex flex-col lg:flex-row-reverse">
          <img src={lauren1} className="w-full lg:w-2/5 lg:h-screen flex flex-col  object-cover"/>
          <div className="flex flex-col lg:flex-1 lg:h-screen justify-center bg-yellow-100 px-24 py-24">
            <p class="font-bold text-4xl text-orange-700">Hi!, I'm Lauren Tsai - ロレン・ツァイ</p>
            <p class="font-normal text-2xl text-orange-700">I'm a model, an actress and an artist.</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <img src={lauren2} className="w-full lg:w-2/5 lg:h-screen flex flex-col  object-cover"/>
          <div className="flex flex-col lg:flex-1 lg:h-screen justify-center bg-red-100 px-24 py-24">
            <p class="font-bold text-4xl text-blue-700">About Me</p>
            <p class="font-normal text-2xl text-blue-700">Lauren Tsai, a glamorous American and Taiwanese hybrid, took the lead in becoming popular and debuted as a model after the show. After cooperating with brands such as Uniqlo, Nike, Madgirl, etc., some brands have recently approached her as the global spokesperson, and that is Shiseido! What kind of charm does this 22-year-old girl have?</p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row-reverse">
          <img src={lauren3} className="w-full lg:w-2/5 lg:h-screen flex flex-col  object-cover"/>
          <div className="flex flex-col lg:flex-1 lg:h-screen justify-center bg-green-100 px-24 py-24">
            <p class="font-bold text-4xl text-red-500">Lauren in childhood</p>
            <p class="font-normal text-2xl text-red-500">Lauren was born in the United States in 1998. His mother is an Italian-American. His father is a Taiwanese from the United States who does not speak Chinese. He is also the niece of a well-known chef Cai Minghao. He has two sisters. Born in such a diverse cultural background, Lauren's growth process is also full of colors of different countries. After his parents divorced, Lauren stayed with his father and immigrated to Hawaii at the age of 7, until he moved to Hiroshima City, Japan as an exchange student for 6 weeks, and then chose to settle in Japan.</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Normal;
