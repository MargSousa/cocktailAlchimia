import React from 'react';
import PropTypes from 'prop-types';
import DrinkCard from '../DrinkCard/DrinkCard';
import './ResultsPage.css';

function ResultsPage(props) {
  const { location } = props;
  const { state } = location;
  const { searchResults } = state;
  const { searchInputText } = state;
  return (
    <>
      <h1>Search results for {searchInputText}</h1>
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
    </>
  );
}

ResultsPage.propTypes = {
  location: PropTypes.string.isRequired,
};

export default ResultsPage;
