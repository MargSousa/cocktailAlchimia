import React from 'react';
import SearchLogo from './SearchLogo';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchLogo />
      </div>
    );
  }
}
export default Homepage;
