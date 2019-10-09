import React, { Component } from 'react';
import SeasonSelect from '../components/SeasonSelect.jsx';
import WeeksPlayedFilter from '../components/WeeksPlayedFilter.jsx';
import StandingsTable from '../components/StandingsTable.jsx';
import _ from 'lodash';
import { pop_colors_standings } from '../util';

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      season: 16,
      min_weeks: 1
    };
  }

  fetchData() {
    console.log('Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/standings/' + this.state.season);
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/standings/' + this.state.season)
      .then(res => res.json())
      .then(standings => {
        return standings.map((item, index) => {
          item.seed = index+1;
          return item;
        });
      })
      .then(standings => {
        return pop_colors_standings(standings);
      })
      .then(standings => {
        return standings.map(item => {
          if (item.weeks_played < this.state.min_weeks) {
            item.hidden = true;
          } else {
            item.hidden = false;
          }
          return item;
        });
      })
      .then(standings => this.setState({ standings: standings }));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange = (e, { value }) => {
    this.setState({ season: value}, this.fetchData);
  }

  handleFilterChange = (e, { value }) => {
    let newStandings = this.state.standings.map(item => {
      if (item.weeks_played < value) {
        item.hidden = true;
      } else {
        item.hidden = false;
      }
      return item;
    });
    console.log(newStandings);
    this.setState({ min_weeks: value, standings: newStandings });
  }

  sortStandings = (accessorFunction) => {
    this.setState({
      standings: _.orderBy(this.state.standings, [accessorFunction], ['desc'])
    });
  }

  reverseStandings = () => {
    this.setState({
      standings: this.state.standings.reverse()
    });
  }

  render() {
    return (
      <div className="content">
        <h1>Standings</h1>
        <SeasonSelect
          value={this.state.season}
          onChange={this.handleChange}
        />
        <WeeksPlayedFilter
          value={this.state.min_weeks}
          onChange={this.handleFilterChange}
        />
        <StandingsTable
          season={this.state.season}
          standings={this.state.standings}
          sortFunction={this.sortStandings}
          reverseFunction={this.reverseStandings}
        />
      </div>
    );
  }
}

export default Standings;
