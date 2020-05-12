import React from 'react';
import PropTypes from 'prop-types';
import DrinkInformation from '../DrinkInformation/DrinkInformation';
import Header from '../Header/Header';
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

    console.log(this.props.location);

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
