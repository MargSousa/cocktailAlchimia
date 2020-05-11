import React from 'react';
import { Link } from 'react-router-dom';
import './DrinkInformation.css';

class DrinkInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkInfo: this.props.drinkDetails,
      ingredientsMeasures: [],
    };
  }

  componentDidMount = () => {
    const { drinkInfo } = this.state.drinkInfo;
    const ingredients = [
      drinkInfo.strIngredient1,
      drinkInfo.strIngredient2,
      drinkInfo.strIngredient3,
      drinkInfo.strIngredient4,
      drinkInfo.strIngredient5,
      drinkInfo.strIngredient6,
      drinkInfo.strIngredient7,
      drinkInfo.strIngredient8,
      drinkInfo.strIngredient9,
      drinkInfo.strIngredient10,
      drinkInfo.strIngredient11,
      drinkInfo.strIngredient12,
      drinkInfo.strIngredient13,
      drinkInfo.strIngredient14,
      drinkInfo.strIngredient15,
    ];
    const measures = [
      drinkInfo.strMeasure1,
      drinkInfo.strMeasure2,
      drinkInfo.strMeasure3,
      drinkInfo.strMeasure4,
      drinkInfo.strMeasure5,
      drinkInfo.strMeasure6,
      drinkInfo.strMeasure7,
      drinkInfo.strMeasure8,
      drinkInfo.strMeasure9,
      drinkInfo.strMeasure10,
      drinkInfo.strMeasure11,
      drinkInfo.strMeasure12,
      drinkInfo.strMeasure13,
      drinkInfo.strMeasure14,
      drinkInfo.strMeasure15,
    ];

    let ing = [];
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i] !== null && measures[i] !== null) {
        ing.push(`${ingredients[i]}: ${measures[i]}`);
      } else if (ingredients[i] !== null && measures[i] === null) {
        ing.push(ingredients[i]);
      }
    }
    this.setState({ ingredientsMeasures: ing });
  };

  render() {
    const { drinkInfo } = this.state.drinkInfo;
    const { ingredientsMeasures } = this.state;

    return (
      <div className="DrinkInformation">
        <div className="title-section">
          <div>
            <Link to="/">
              <div className="arrow-button" />
            </Link>
          </div>
          <div className="Drink">{drinkInfo.strDrink}</div>
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

export default DrinkInformation;
