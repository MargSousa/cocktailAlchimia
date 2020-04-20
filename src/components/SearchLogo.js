import React from 'react';
import Form from 'react-bootstrap/Form';
import './SearchLogo.css';

class SearchLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'Choose type of search...',
      searchInputText: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.type);

    this.setState({
      [name]: value,
      searchInputText: value,
    });
  };

  render() {
    const { searchType } = this.state;
    const { searchInputText } = this.state;

    return (
      <div>
        <img src="" alt="Logo" />
        <div className="Dropdown">
          <Form>
            <Form.Group controlId="formGridState">
              <Form.Control
                as="select"
                name="search"
                value={searchType}
                onChange={this.handleChange}
              >
                <option value="">Choose type of search...</option>
                <option value="Ingredients">By Ingredients</option>
                <option value="Drinks">By Drinks</option>
              </Form.Control>
              <Form.Control
                name="searchInputText"
                value={searchInputText}
                placeholder="Search Here"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
          <p>{searchType}</p>
          <p>{searchInputText}</p>
        </div>
      </div>
    );
  }
}

export default SearchLogo;
