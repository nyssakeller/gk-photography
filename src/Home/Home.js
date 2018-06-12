import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImage: require('../images/broncos.jpg'),
      counter: 0,
      imageUrls: [require('../images/nyssa.jpg'), require('../images/justice.jpg'), require('../images/andy.jpg'), require('../images/broncos.jpg')]
    }
  }

  componentDidMount() {
    this.callTimeOut();
  }

  callTimeOut = () => {
    setTimeout(() => {
      this.changeImg();
      console.log('change');
    }, 5000);
  }

  changeImg = () => {
    let { imageUrls, counter } = this.state;

    this.setState({backgroundImage: [imageUrls[counter]]});
    counter >= 3 ? this.setState({ counter: 0 }) : this.setState({ counter: counter + 1 });
    this.callTimeOut();
  }

  render() {
    let { backgroundImage } = this.state;
    return (
      <div className='home'>
        <img className='home-pics' src={backgroundImage}/>
      </div>
    );
  }
};

export default Home;