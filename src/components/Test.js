import React from 'react';
import './Test.css';
import axios from 'axios';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    }
  }

  render() {
    return(
      <div id="drink">
        <p>{this.state.drinks.strDrink}</p>
        <img src={this.state.drinks.strDrinkThumb}></img>
      </div>
    )
  }

  componentDidMount() {  

    let input = 'margarita';
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    axios.get(url)
    .then(function(response) { return response.data ;})
    .then(function(drinksData) {

      console.log(drinksData.drinks[0]);

      this.setState({ 
        drinks: drinksData.drinks[0] 
      });

    }.bind(this));
  };
}

export default Test;