import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultTable from './ResultTable.jsx';
import Grid from '@material-ui/core/Grid';
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
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
  state = {results: []}

  fetchData(season_id, week_id) {
    fetch('/results/' + season_id + '/' + week_id)
      .then(res => res.json())
      .then(results => this.setState({ results }))
      .then(console.log(this.state));
  }

  componentDidMount() {
    this.fetchData(14,1);
  }

  render() {
    return (
      <div className="App">
        <h1>Results</h1>
        <Grid container spacing={24}>
        {this.state.results.map(group =>
          <Grid item xs={12}>
            <ResultTable data={group} />
          </Grid>
        )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
