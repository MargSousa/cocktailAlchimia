import React from 'react';
import DrinkInformation from '../DrinkInformation/DrinkInformation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const information = this.props.location.state;
    return (
      <div className="Detail-Page">
        <Header />
        <DrinkInformation drinkDetails={information} />
        <Footer />
      </div>
    );
  }
}
export default DetailPage;
