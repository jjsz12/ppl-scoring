import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';
import Results from './pages/Results.jsx';
import Standings from './pages/Standings.jsx';
import Stats from './pages/Stats.jsx';
import Players from './pages/Players.jsx';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/standings" component={Standings} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/players" component={Players} />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
