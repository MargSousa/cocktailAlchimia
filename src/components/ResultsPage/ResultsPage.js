import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DrinkCard from '../DrinkCard/DrinkCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ResultsPage.css';

function ResultsPage() {
  const searchResults = JSON.parse(localStorage.getItem('searchResults'));
  const searchInputText = JSON.parse(localStorage.getItem('searchInputText'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="title-section">
        <div>
          <Link to="/">
            <div className="arrow-button" />
          </Link>
        </div>
        <div className="main-title">Search results for {searchInputText}</div>
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
