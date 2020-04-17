import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Test from './components/Test';
import Homepage from './components/Homepage';
import DetailPage from './components/DetailPage';
import ResultsPage from './components/ResultsPage';

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
              path="/results/drinkinfo/:drink"
              component={DetailPage}
            />
            <Route exact path="/drinkinfo/:drink" component={DetailPage} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
