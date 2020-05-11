import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import '../../assets/Normalize.css';
import './DrinkCard.css';

function DrinkCard(props) {
  const { drinkInfo } = props;

  function handleDrinkInformation() {
    props.history.push({
      pathname: '/results/drinkinfo/:drink',
      state: { drinkInfo },
    });
  }

  return (
    <div className="card" onClick={handleDrinkInformation}>
      <img src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrink} />
      <h2 className="card-title">{drinkInfo.strDrink}</h2>
    </div>
  );
}

DrinkCard.propTypes = {
  drinkInfo: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
};

export default withRouter(DrinkCard);
