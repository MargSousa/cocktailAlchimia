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
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 15; i += 1) {
      ingredients.push(drinkDetails[`strIngredient${i}`]);
      measures.push(drinkDetails[`strMeasure${i}`]);
    }
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
    const prevPath = JSON.parse(localStorage.getItem('prevPath'));

    return (
      <div className="DrinkInformation">
        <div className="title-section">
          <div>
            <Link to={prevPath}>
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
