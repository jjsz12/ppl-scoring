import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ResultTable from '../components/ResultTable.jsx';

class Results extends Component {
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
      <div>
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

export default Results;
