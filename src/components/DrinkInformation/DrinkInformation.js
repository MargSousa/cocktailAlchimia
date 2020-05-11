import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './DrinkInformation.css';

class DrinkInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkInformation: this.props.drinkDetails,
      ingredientsMeasures: [],
    };
  }

  componentDidMount = () => {
    const { drinkInformation } = this.state;
    const drink = drinkInformation.drinkInfo;

    const ingredients = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
      drink.strIngredient10,
      drink.strIngredient11,
      drink.strIngredient12,
      drink.strIngredient13,
      drink.strIngredient14,
      drink.strIngredient15,
    ];
    const measures = [
      drink.strMeasure1,
      drink.strMeasure2,
      drink.strMeasure3,
      drink.strMeasure4,
      drink.strMeasure5,
      drink.strMeasure6,
      drink.strMeasure7,
      drink.strMeasure8,
      drink.strMeasure9,
      drink.strMeasure10,
      drink.strMeasure11,
      drink.strMeasure12,
      drink.strMeasure13,
      drink.strMeasure14,
      drink.strMeasure15,
    ];

    const ing = [];
    for (let i = 0; i < ingredients.length; i += 1) {
      if (ingredients[i] !== null && measures[i] !== null) {
        ing.push(`${ingredients[i]}: ${measures[i]}`);
      } else if (ingredients[i] !== null && measures[i] === null) {
        ing.push(ingredients[i]);
      }
    }
    this.setState({ ingredientsMeasures: ing });
  };

  render() {
    const { drinkInformation, ingredientsMeasures } = this.state;
    const drink = drinkInformation.drinkInfo;

    return (
      <div className="DrinkInformation">
        <div className="title-section">
          <div>
            <Link to="/">
              <div className="arrow-button" />
            </Link>
          </div>
          <div className="Drink">{drink.strDrink}</div>
        </div>
        <div className="first-section">
          <div className="Image">
            <img
              className="drink-image"
              src={drink.strDrinkThumb}
              alt="Drink"
            />
          </div>
          <div className="Ingredients">
            <div className="title ingredient-title">Ingredients:</div>
            <ul>
              {ingredientsMeasures.map((ingredient) => (
                <li className="ingredient-text">{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Method">
          <div className="title recipe-title">Recipe:</div>
          <div className="recipe-text">{drink.strInstructions}</div>
        </div>
      </div>
    );
  }
}

DrinkInformation.propTypes = {
  drinkDetails: PropTypes.string.isRequired,
};

export default DrinkInformation;
