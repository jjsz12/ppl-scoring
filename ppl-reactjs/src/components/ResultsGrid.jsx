import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ResultTable from './ResultTable.jsx';
import Paper from '@material-ui/core/Paper';

class ResultsGrid extends Component {
  render() {
    if (this.props.results.length !== 0) {
      return (
        <Grid container spacing={24}>
          {this.props.results.map(group =>
            <Grid item xs={12}>
              <ResultTable data={group} />
            </Grid>
          )}
        </Grid>
      );
    } else {
      return (
        <Paper>No results found.</Paper>
      );
    }
  }
}

export default ResultsGrid;
