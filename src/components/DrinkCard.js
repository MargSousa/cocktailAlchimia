import React from 'react';
import './normalize.css';
import './DrinkCard.css';

function DrinkCard(props) {
  const { drinkInfo } = props;
  console.log({ drinkInfo });

  return (
    <div className="card">
      <img src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrink} />
      <h2 className="card-title">{drinkInfo.strDrink}</h2>
    </div>
  );
}

export default DrinkCard;
