import React from 'react';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return <h1>Detail Page</h1>;
  }
}
export default DetailPage;
