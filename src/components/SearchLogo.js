import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchLogo.css';

class SearchLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchType: '',
      searchInputText: '',
      isCocktailSelected: false,
      isIngredientSelected: false,
    };
  }

  // handleChange = (event) => {
  //   event.preventDefault();
  //   const { value, name } = event.target;
  //   const isSelected = true;
  //   const { searchType } = this.state;

  //   this.setState({
  //     [name]: value,
  //   });

  //   if (searchType === 'Ingredients') {
  //     console.log('ingredients');
  //     this.setState({
  //       isCocktailSelected: !isSelected,
  //       isIngredientSelected: isSelected,
  //     });
  //   } else if (searchType === 'Drinks') {
  //     console.log('drinks');
  //     this.setState({
  //       isCocktailSelected: isSelected,
  //       isIngredientSelected: !isSelected,
  //     });
  //   }
  // };

  handleChangeDropdown = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const isSelected = true;

    if (value !== '') {
      const formSelect = document.getElementById('select');
      formSelect.style.border = '1px solid grey';
    }

    this.setState({
      searchType: value,
    });

    if (value === 'Ingredients') {
      this.setState({
        isCocktailSelected: !isSelected,
        isIngredientSelected: isSelected,
      });
    } else if (value === 'Drinks') {
      this.setState({
        isCocktailSelected: isSelected,
        isIngredientSelected: !isSelected,
      });
    }
  };

  handleChangeText = (event) => {
    const { value } = event.target;

    if (value !== '') {
      const formSelect = document.getElementById('search');
      formSelect.style.border = '1px solid grey';
    }

    this.setState({
      searchInputText: value,
    });
  };

  getDrinksData = () => {
    let url = '';
    const { isCocktailSelected } = this.state;
    const { isIngredientSelected } = this.state;
    const { searchInputText } = this.state;
    const getIngredient = searchInputText;
    const urlByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${getIngredient}`;
    const urlByIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${getIngredient}`;

    if (isCocktailSelected) {
      url = urlByName;
    } else if (isIngredientSelected) {
      url = urlByIngredient;
    }

    axios
      .get(url)
      .then((response) => response.data)
      .then((dataresult) => {
        const results = dataresult.drinks;
        if (results === null) {
          alert('Sorry, no results found. Please do another search!');
        } else {
          this.setState({
            searchResults: results,
          });
        }
      });
  };

  validateInput = () => {
    const { searchType } = this.state;
    const { searchInputText } = this.state;

    if (searchType === '') {
      const formSelect = document.getElementById('select');
      formSelect.style.border = '1px solid red';
    }
    if (searchInputText === '') {
      const formSelect = document.getElementById('search');
      formSelect.style.border = '1px solid red';
    }
  };

  handleSearch = () => {
    this.validateInput();
    this.getDrinksData();
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { searchType } = this.state;
    const { searchInputText } = this.state;

    return (
      <div className="SearchLogo">
        <div className="divImagem">
          <img
            className="logo-image"
            src="https://i.imgur.com/vLhf37l.png"
            alt="Logo"
          />
        </div>
        <div className="divImagem">
          <img
            className="bar-image"
            src="https://imgur.com/vof6KtG.png"
            alt="Bar"
          />
        </div>
        <div className="search-section">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="search-group">
              <Form.Control
                id="select"
                className="select-input"
                as="select"
                name="searchType"
                value={searchType}
                placeholder="Choose type of search..."
                onChange={this.handleChangeDropdown}
              >
                <option value="" hidden>
                  Choose search type...
                </option>
                <option value="Ingredients">By Ingredient</option>
                <option value="Drinks">By Drink Name</option>
              </Form.Control>
              <Form.Control
                id="search"
                className="search-input"
                name="searchInputText"
                value={searchInputText}
                placeholder="Enter ingredient or drink name..."
                onChange={this.handleChangeText}
              />
              <div>
                <Button onClick={this.handleSearch}>Search</Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default SearchLogo;
