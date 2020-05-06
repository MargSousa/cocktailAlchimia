import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/results/:search" component={ResultsPage} />
            <Route
              exact
              path="/results/drinkinfo/:drink"
              component={DetailPage}
            />
            <Route exact path="/drinkinfo/:drink" component={DetailPage} />
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
