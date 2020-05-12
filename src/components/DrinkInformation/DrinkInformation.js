import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './DrinkInformation.css';

class DrinkInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkInfo: [],
      ingredientsMeasures: [],
    };
  }

  componentDidMount = () => {
    const { drinkDetails } = this.props;

    const ingredients = [
      drinkDetails.strIngredient1,
      drinkDetails.strIngredient2,
      drinkDetails.strIngredient3,
      drinkDetails.strIngredient4,
      drinkDetails.strIngredient5,
      drinkDetails.strIngredient6,
      drinkDetails.strIngredient7,
      drinkDetails.strIngredient8,
      drinkDetails.strIngredient9,
      drinkDetails.strIngredient10,
      drinkDetails.strIngredient11,
      drinkDetails.strIngredient12,
      drinkDetails.strIngredient13,
      drinkDetails.strIngredient14,
      drinkDetails.strIngredient15,
    ];
    const measures = [
      drinkDetails.strMeasure1,
      drinkDetails.strMeasure2,
      drinkDetails.strMeasure3,
      drinkDetails.strMeasure4,
      drinkDetails.strMeasure5,
      drinkDetails.strMeasure6,
      drinkDetails.strMeasure7,
      drinkDetails.strMeasure8,
      drinkDetails.strMeasure9,
      drinkDetails.strMeasure10,
      drinkDetails.strMeasure11,
      drinkDetails.strMeasure12,
      drinkDetails.strMeasure13,
      drinkDetails.strMeasure14,
      drinkDetails.strMeasure15,
    ];

    const ing = [];
    for (let i = 0; i < ingredients.length; i += 1) {
      if (ingredients[i] !== null && measures[i] !== null) {
        ing.push(`${ingredients[i]}: ${measures[i]}`);
      } else if (ingredients[i] !== null && measures[i] === null) {
        ing.push(ingredients[i]);
      }
    }
    this.setState({
      ingredientsMeasures: ing,
      drinkInfo: drinkDetails,
    });
  };

  render() {
    const { drinkInfo } = this.state;
    const { ingredientsMeasures } = this.state;
    return (
      <div className="DrinkInformation">
        <div className="title-section">
          <div>
            <Link to="/">
              <div className="arrow-button" />
            </Link>
          </div>
          <div className="main-title">{drinkInfo.strDrink}</div>
        </div>
        <div className="first-section">
          <div className="Image">
            <img
              className="drink-image"
              src={drinkInfo.strDrinkThumb}
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
          <div className="recipe-text">{drinkInfo.strInstructions}</div>
        </div>
      </div>
    );
  }
}

DrinkInformation.propTypes = {
  drinkDetails: PropTypes.string.isRequired,
};

export default DrinkInformation;
