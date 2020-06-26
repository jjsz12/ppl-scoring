import React, { Component } from 'react';
import SeasonSelect from '../components/SeasonSelect.jsx';
import StatsTable from '../components/StatsTable.jsx';
import WeeksPlayedFilter from '../components/WeeksPlayedFilter.jsx';
import _ from 'lodash';
import { pop_colors_stats } from '../util';
import { Container, Divider } from 'semantic-ui-react';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      season: 20,
      min_weeks: 3
    };
  }

  fetchData() {
    console.log('Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/stats/' + this.state.season)
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/stats/' + this.state.season)
      .then(res => res.json())
      .then(stats => {
        return pop_colors_stats(stats);
      })
      .then(stats => {
        return stats.map(item => {
          if (item.points[0].weeks_played < this.state.min_weeks) {
            item.hidden = true;
          } else {
            item.hidden = false;
          }
          return item;
        });
      })
      .then(stats => this.setState({ stats: stats }));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange = (e, { value }) => {
    this.setState({ season: value}, this.fetchData);
  }

  handleFilterChange = (e, { value }) => {
    let newStats = this.state.stats.map(item => {
      if (item.points[0].weeks_played < value) {
        item.hidden = true;
      } else {
        item.hidden = false;
      }
      return item;
    });
    this.setState({ min_weeks: value, stats: newStats });
  }

  sortTable = (accessorFunction) => {
    this.setState({
      stats: _.orderBy(this.state.stats, [accessorFunction], ['desc'])
    });
  }

  reverseTable = () => {
    this.setState({
      stats: this.state.stats.reverse()
    });
  }

  render() {
    return (
      <div class="content">
        <h1>Stats</h1>
        <SeasonSelect
          value={this.state.season}
          onChange={this.handleChange}
        />
        <WeeksPlayedFilter
          value={this.state.min_weeks}
          onChange={this.handleFilterChange}
        />
      {/*<Legend />*/}
        <Container>
          <Divider />
          <StatsTable
            season={this.state.season}
            stats={this.state.stats}
            sortFunction={this.sortTable}
            reverseFunction={this.reverseTable}
          />
        </Container>
      </div>
    );
  }
}

export default Stats;
