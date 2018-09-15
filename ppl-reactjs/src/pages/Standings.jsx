import React, { Component } from 'react';
import SeasonSelect from '../components/SeasonSelect.jsx';
import Filter from '../components/Filter.jsx';
import StandingsTable from '../components/StandingsTable.jsx';

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      season: 14
    };
  }

  fetchData() {
    fetch('/standings/' + this.state.season)
      .then(res => res.json())
      .then(standings => this.setState({ standings: standings }))
      .then(console.log(this.state));
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
        <h1>Standings</h1>
        <SeasonSelect value={this.state.season} onChange={this.handleChange} />
        <Filter />
        <StandingsTable standings={this.state.standings} />
      </div>
    );
  }
}

export default Standings;
