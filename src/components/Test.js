import React from 'react';
import './Test.css';
import axios from 'axios';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount = () => {
    const input = 'margarita';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    axios
      .get(url)
      .then((response) => response.data)
      .then((drinksData) => {
        console.log(drinksData.drinks[0]);

        this.setState({
          drinks: drinksData.drinks[0],
        });
      });
  };

  render() {
    const { drinks } = this.state;
    return (
      <div id="drink">
        <p>{drinks.strDrink}</p>
        <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
      </div>
    );
  }
}

export default Test;
