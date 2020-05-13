import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
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

  const [showNonAlcoholic, setShowNonAlcoholic] = useState(false);

  function handleFilter() {
    setShowNonAlcoholic(!showNonAlcoholic);
  }

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
      <div className="filter-section">
        <div>All results</div>
        <Switch
          onChange={handleFilter}
          checked={showNonAlcoholic}
          checkedIcon=""
          uncheckedIcon=""
          offColor="#4e0668"
          onColor="#b6ff00"
          className="filter"
          height={18}
          width={38}
        />
        <div>Non-Alcoholic</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {searchResults
          .filter(
            (drink) => !showNonAlcoholic || drink.strAlcoholic === 'Non alcoholic',
          )
          .map((drink) => (
            <DrinkCard key={drink.idDrink} drinkInfo={drink} />
          ))}
      </div>
      <Footer />
    </>
  );
}

export default ResultsPage;
