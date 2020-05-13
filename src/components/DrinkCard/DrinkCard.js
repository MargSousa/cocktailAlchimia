import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import '../../assets/Normalize.css';
import './DrinkCard.css';

function DrinkCard(props) {
  const { drinkInfo } = props;
  const searchInputText = JSON.parse(localStorage.getItem('searchInputText'));
  const prevPath = JSON.parse(localStorage.getItem('prevPath'));

  function handleDrinkInformation() {
    const drinkName = drinkInfo.strDrink.split(' ').join('_');
    let nextPath = '';
    if (prevPath === '/') {
      nextPath = `/${drinkName}`;
    } else {
      nextPath = `/results/${searchInputText}/${drinkName}`;
    }
    props.history.push({
      pathname: nextPath,
      state: { drinkInfo },
    });
  }

  return (
    <a href className="card" onClick={handleDrinkInformation}>
      <div>
        <img src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrink} />
        <h2 className="card-title">{drinkInfo.strDrink}</h2>
      </div>
    </a>
  );
}

DrinkCard.propTypes = {
  drinkInfo: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
};

export default withRouter(DrinkCard);
