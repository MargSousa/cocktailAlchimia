import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchLogo.css';

// Search ingredient by name
// https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
// Search by ingredient
// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

// const urlByName = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`;
// const urlByIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`;

class SearchLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 'Choose type of search...',
      searchInputText: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = () => {
    console.log(this.state.searchType);
    console.log(this.state.searchInputText);
  };

  render() {
    const { searchType } = this.state;
    const { searchInputText } = this.state;

    return (
      <div>
        {/* <img src="" alt="Logo" /> */}
        <div className="search">
          <Form>
            <Form.Group className="search-group" controlId="formGridState">
              <Form.Control
                className="select-input"
                as="select"
                name="searchType"
                value={searchType}
                onChange={this.handleChange}
              >
                <option value="">Choose search type...</option>
                <option value="Ingredients">By Ingredients</option>
                <option value="Drinks">By Drinks</option>
              </Form.Control>
              <Form.Control
                className="search-input"
                name="searchInputText"
                value={searchInputText}
                placeholder="Enter ingredient or drink name..."
                onChange={this.handleChange}
                autoComplete="off"
              />
              <Button onClick={this.handleSearch}>Search</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default SearchLogo;
