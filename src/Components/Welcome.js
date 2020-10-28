import React from 'react';

const WELCOME_TEXT = [
  {
    contry: 'German',
    word: 'Willkommen!'
  },
  {
    contry: 'Swedish',
    word: 'Välkommen!!'
  },
  {
    contry: 'Russian',
    word: 'Добро пожаловать!'
  },
  {
    contry: 'USA',
    word: 'Welcome!'
  },  
  {
    contry: 'Japan',
    word: 'こんにちは!'
  },  
  {
    contry: 'Chinese',
    word: '你好!'
  },  
  {
    contry: 'Indonesia',
    word: 'Selamat Datang!'
  }
]

class CustomButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.state.index >  WELCOME_TEXT.length - 2){
        this.setState({ index: 0 })
      } else {
        this.setState({ index: this.state.index += 1 })
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
        <div className="text-teal-700 font-sans text-3xl font-bold">
          {WELCOME_TEXT[this.state.index].word}
        </div>
    )
  }
}

export default CustomButton