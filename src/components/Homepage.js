import React from 'react';
import SearchLogo from './SearchLogo';
import RandomDrinks from './RandomDrinks';
import Footer from './Footer';
import './Homepage.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Homepage">
        <SearchLogo />
        <RandomDrinks />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
