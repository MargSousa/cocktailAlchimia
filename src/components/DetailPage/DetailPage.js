import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import DrinkInformation from '../DrinkInformation/DrinkInformation';
import ShareInfo from '../ShareInfo/ShareInfo';
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
    const { location } = this.props;
    const information = location.state.drinkInfo;

    return (
      <div className="Detail-Page">
        <Header />
        <DrinkInformation drinkDetails={information} />
        <ShareInfo />
        <Footer />
      </div>
    );
  }
}

DetailPage.propTypes = {
  location: PropTypes.string.isRequired,
};

export default DetailPage;
