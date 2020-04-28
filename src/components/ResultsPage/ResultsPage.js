import React from 'react';
import DrinkCard from '../DrinkCard/DrinkCard';
import './ResultsPage.css';

function ResultsPage(props) {
  const searchResults = props.location.state.searchResults;
  const searchInputText = props.location.state.searchInputText;
  console.log(searchResults);
  console.log(searchInputText);
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

export default ResultsPage;
