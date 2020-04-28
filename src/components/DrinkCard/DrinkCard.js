import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/Normalize.css';
import './DrinkCard.css';

function DrinkCard(props) {
  const { drinkInfo } = props;
  //console.log({ drinkInfo });

  return (
    <div className="card">
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

export default DrinkCard;
