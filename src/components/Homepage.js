import React from 'react';
import RandomDrinks from './RandomDrinks';
import './homepage.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <RandomDrinks />;
  }
}
export default Homepage;
