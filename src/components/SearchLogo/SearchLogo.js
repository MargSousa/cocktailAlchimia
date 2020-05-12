import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ModalPopup from '../ModalPopup/ModalPopup';
import './SearchLogo.css';

class SearchLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      searchInputText: '',
      isCocktailSelected: false,
      isIngredientSelected: false,
      isPopupShowing: false,
      errorMessageType: false,
      errorMessageText: false,
    };
  }

  handleChangeDropdown = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const isSelected = true;

    if (value !== '') {
      this.setState({ errorMessageType: false, searchType: value });
    }
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
    this.setState({ errorMessageText: false, searchInputText: value });
  };

  getDrinksData = () => {
    const { history } = this.props;
    let url = '';
    const {
      isCocktailSelected,
      isIngredientSelected,
      searchInputText,
    } = this.state;
    const urlByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInputText}`;
    const urlByIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInputText}`;

    if (isCocktailSelected) {
      url = urlByName;
    } else if (isIngredientSelected) {
      url = urlByIngredient;
    }
    console.log(url);

    axios
      .get(url)
      .then((response) => response.data)
      .then((dataresult) => {
        const results = dataresult.drinks;
        if (results === null || results === undefined) {
          this.handleModal();
        } else {
          history.push({
            pathname: '/results/:search',
            state: { searchResults: results, searchInputText },
          });
        }
      });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const { searchType, searchInputText } = this.state;

    if (searchType === '') {
      this.setState({ errorMessageType: true });
    }
    if (searchInputText === '') {
      this.setState({ errorMessageText: true });
    }
    if (searchType !== '' && searchInputText !== '') {
      this.getDrinksData();
    }
  };

  handleModal = () => {
    const { isPopupShowing } = this.state;
    this.setState({ isPopupShowing: !isPopupShowing });
  };

  render() {
    const {
      searchType,
      searchInputText,
      isPopupShowing,
      errorMessageType,
      errorMessageText,
    } = this.state;

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
                className={
                  errorMessageType ? 'error input-select' : 'input input-select'
                }
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
                  className={
                    errorMessageText
                      ? 'error input-search'
                      : 'input input-search'
                  }
                  name="searchInputText"
                  value={searchInputText}
                  placeholder="Enter search item..."
                  onChange={this.handleChangeText}
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
        <ModalPopup show={isPopupShowing} handlemodal={this.handleModal} />
      </div>
    );
  }
}

SearchLogo.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(SearchLogo);
