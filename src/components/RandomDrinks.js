import React from 'react';
import axios from 'axios';
import DrinkCard from './DrinkCard';
import './RandomDrinks.css';

class RandomDrinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomDrinks: [],
    };
  }

  getRandomDrinks = () => {
    let newData = [];
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

    for (let i = 0; i < 10; i++) {
      axios
        .get(url)
        .then((response) => response.data)
        .then((drinksData) => {
          newData.push(drinksData.drinks[0]);

          this.setState({
            randomDrinks: newData,
          });
        });
    }
  };

  componentDidMount() {
    this.getRandomDrinks();
  }

  render() {
    const { randomDrinks } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {randomDrinks.map((randomDrink) => {
          return (
            <DrinkCard key={randomDrink.idDrink} drinkInfo={randomDrink} />
          );
        })}
      </div>
    );
  }
}

export default RandomDrinks;
