import React, { Component } from 'react';
import ResultsPane from '../components/ResultsPane.jsx';
import SeasonSelect from '../components/SeasonSelect.jsx';
import WeekSelect from '../components/WeekSelect.jsx';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      season: 20,
      week: 8
    };
  }

  fetchData() {
    console.log('Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/results/' + this.state.season + '/' + this.state.week);
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/results/' + this.state.season + '/' + this.state.week)
      .then(res => res.json())
      .then(results => this.setState({ results: results }));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSeasonChange = (e, { value }) => {
    this.setState({ season: value}, this.fetchData);
  }

  handleWeekChange = (e, { value }) => {
    this.setState({ week: value}, this.fetchData);
  }

  render() {
    return (
      <div className="content">
        <h1>Results</h1>
        <SeasonSelect value={this.state.season} onChange={this.handleSeasonChange} />
        <WeekSelect value={this.state.week} onChange={this.handleWeekChange} />
        <ResultsPane results={this.state.results} />
      </div>
    );
  }
}

export default Results;
