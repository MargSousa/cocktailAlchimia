import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';
import './DrinkCardsRandom.css';
import DrinkCard from './DrinkCard';

class DrinkCardsRandom extends React.Component {
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
          //console.log(drinksData);
          newData.push(drinksData.drinks[0]);

          this.setState({
            randomDrinks: newData,
          });
          console.log(this.state.randomDrinks);
        });
    }
  };
  componentDidMount() {
    this.getRandomDrinks();
  }

  render() {
    const { randomDrinks } = this.state;
    let newDrink = this.state.randomDrinks[0];
    console.log('newDrink', newDrink);
    // console.log(randomDrinks);
    return <DrinkCard />;
  }
}

export default DrinkCardsRandom;

// <CardColumns
//   style={{
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   }}
// >
//   {randomDrinks.map((randomDrink) => {
//     return (
//       <DrinkCard drinkInfo={randomDrink}></DrinkCard>
//     );
//   })}
// </CardColumns>
//   {randomDrinks.map((randomDrink) => {
//     return (
//       <Card style={{ width: '15rem' }} className="drink-card">
//         <Card.Img
//           variant="top"
//           src={randomDrink.strDrinkThumb}
//           alt={randomDrink.strDrink}
//         />
//         <Card.Body className="drink-card-body">
//           <Card.Title className="drink-card-title"></Card.Title>
//           <Card.Text></Card.Text>
//           <Button variant="info" size="sm">
//             {randomDrink.strDrink}
//           </Button>
//         </Card.Body>
//       </Card>
//     );
//   })}
// </CardColumns>
