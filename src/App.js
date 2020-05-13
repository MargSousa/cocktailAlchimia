import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import DetailPage from './components/DetailPage/DetailPage';
import ResultsPage from './components/ResultsPage/ResultsPage';
import AboutUs from './components/AboutUs/AboutUs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/results/:search">Results</Link>
          <Link to="/results/drinkinfo/:drink">Detailed Drink Info</Link>
          <Link to="/drinkinfo/:drink">Pick from Random Drinks</Link>
          <Link to="/test">TEST</Link>

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/results/:search" component={ResultsPage} />
            <Route
              exact
              path="/results/:search/:drink"
              component={DetailPage}
            />
            <Route exact path="/:drink" component={DetailPage} />
            <Route exact path="/about/team" component={AboutUs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
