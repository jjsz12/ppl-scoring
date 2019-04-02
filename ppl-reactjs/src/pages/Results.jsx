import React, { Component } from 'react';
import ResultsPane from '../components/ResultsPane.jsx';
import SeasonSelect from '../components/SeasonSelect.jsx';
import WeekSelect from '../components/WeekSelect.jsx';
import Filter from '../components/Filter.jsx';

class Results extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      results: [],
      season: 15,
      week: 1
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, this.fetchData);
  };

  render() {
    return (
      <div>
        <h1>Results</h1>
        <SeasonSelect value={this.state.season} onChange={this.handleChange} />
        <WeekSelect value={this.state.week} onChange={this.handleChange} />
        <Filter />
        <ResultsPane results={this.state.results} />
      </div>
    );
  }
}

export default Results;
