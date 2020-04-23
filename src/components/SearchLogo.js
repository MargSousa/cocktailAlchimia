import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
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
      formSelect.style.border = '1px solid #b6ff00';
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
      formSelect.style.border = '1px solid #b6ff00';
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
        if (results === '') {
          alert('Sorry, no results found. Please do another search!');
        } else {
          console.log('results', results);
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

  handleSearch = (event) => {
    event.preventDefault();
    this.validateInput();
    this.getDrinksData();
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
            src="https://i.imgur.com/PfyfmNI.png"
            alt="Bar"
          />
        </div>
        <div className="search-section">
          <Form onSubmit={this.handleSearch}>
            <Form.Group className="search-group">
              <Form.Control
                id="select"
                className="input input-select"
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
              <div className="icon-section">
                <Form.Control
                  id="search"
                  as="input"
                  className="input input-search"
                  name="searchInputText"
                  value={searchInputText}
                  placeholder="Enter search item..."
                  onChange={this.handleChangeText}
                  autoComplete="off"
                />
                <Button
                  className="button-icon"
                  type="button"
                  onClick={this.handleSearch}
                >
                  <img
                    className="search-icon"
                    src="https://i.imgur.com/Zi5OSOM.png"
                    alt="search-icon"
                  />
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default SearchLogo;
