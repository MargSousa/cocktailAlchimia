import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DrinkCard from '../DrinkCard/DrinkCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ResultsPage.css';

function ResultsPage(props) {
  const { location } = props;
  const { state } = location;
  const { searchResults } = state;
  const { searchInputText } = state;
  return (
    <>
      <Header />
      <div className="title-section">
        <div>
          <Link to="/">
            <div className="arrow-button" />
          </Link>
        </div>
        <h1 className="searchtitle">Search results for {searchInputText};</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {searchResults.map((drink) => (
          <DrinkCard key={drink.idDrink} drinkInfo={drink} />
        ))}
      </div>
      <Footer />
    </>
  );
}

ResultsPage.propTypes = {
  location: PropTypes.string.isRequired,
};

export default ResultsPage;
