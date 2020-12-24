import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';
import Results from './pages/Results.jsx';
import Standings from './pages/Standings.jsx';
import Stats from './pages/Stats.jsx';
import Players from './pages/Players.jsx';
import Machines from './pages/Machines.jsx';

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
          <Route exact path="/machines" component={Machines} />
        </div>
      </Router>
    );
  }
}

export default App;
