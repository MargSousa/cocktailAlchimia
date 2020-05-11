import React from 'react';
import SearchLogo from '../SearchLogo/SearchLogo';
import RandomDrinks from '../RandomDrinks/RandomDrinks';
import Footer from '../Footer/Footer';
import './Homepage.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

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
