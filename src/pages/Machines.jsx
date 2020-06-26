import React, { Component } from 'react';
import _ from 'lodash';
import FilterManufacturer from '../components/FilterManufacturer';
import FilterPinburgh from '../components/FilterPinburgh';
import FilterYear from '../components/FilterYear';
import FilterSeason from '../components/FilterSeason';
import FilterLocation from '../components/FilterLocation';
import MachinesTable from '../components/MachinesTable';
import {
  Container, Divider, Dropdown, Grid, Label, Loader, Segment,
} from 'semantic-ui-react';

class Machines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [],
      selectedMfrs: [],
      selectedPinburghCat: [],
      selectedYear: [],
      selectedSeason: [],
      selectedLocation: [],
      loading: true
    };
  }

  fetchData() {
    console.log('Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/machineStats');
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/machineStats')
      .then(res => res.json())
      .then(machines => {
        const new_machines = machines.map(item => {
          item.score_count = item.scores.length;
          item.group_count = item.game_ids.length;
          item.locations = [];
          item.game_ids.forEach(group => {
            if (item.locations.indexOf(group.location) === -1) {
              item.locations.push(group.location);
            }
          });
          item.locations.sort();
          return item;
        });

        this.setState({ machines: new_machines, loading: false });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  sortTable = (accessorFunction) => {
    const { machines } = this.state;
    this.setState({
      machines: _.orderBy(machines, [accessorFunction], ['asc'])
    });
  }

  reverseTable = () => {
    const { machines } = this.state;
    this.setState({
      machines: machines.reverse()
    });
  }

  selectManufacturer = (e, { value }) => {
    this.setState({ selectedMfrs: value }, this.filterTable);
  }

  selectPinburghCat = (e, { value }) => {
    this.setState({ selectedPinburghCat: value }, this.filterTable);
  }

  selectYear = (e, { value }) => {
    this.setState({ selectedYear: value }, this.filterTable);
  }

  selectSeason = (e, { value }) => {
    this.setState({ selectedSeason: value }, this.filterTable);
  }

  selectLocation = (e, { value }) => {
    this.setState({ selectedLocation: value }, this.filterTable);
  }

  filterTable() {
    const {
      machines, selectedMfrs, selectedPinburghCat, selectedYear, selectedSeason,
    } = this.state;
    const new_machines = machines.map((item) => {
      // filter season
      if (selectedSeason.length !== 0) {
        let score_count = 0;
        let group_count = 0;
        const locations = [];
        selectedSeason.forEach(season_id => {
          item.scores.forEach(score => {
            if (score.season_id === season_id) {
              score_count = score_count + 1;
            }
          });
          item.game_ids.forEach(group => {
            if (group.season_id === season_id) {
              group_count = group_count + 1;
              if (locations.indexOf(group.location) === -1) {
                locations.push(group.location);
              }
            }
          });
        });

        item.score_count = score_count;
        item.group_count = group_count;
        item.locations = locations;
        item.locations.sort();

        if (group_count === 0) {
          item.hidden = true;
          return item;
        }
      } else {
        item.score_count = item.scores.length;
        item.group_count = item.game_ids.length;
        item.locations = [];
        item.game_ids.forEach(group => {
          if (item.locations.indexOf(group.location) === -1) {
            item.locations.push(group.location);
          }
        });
        item.locations.sort();
      }
      // filter manufacturers
      if (selectedMfrs.length !== 0 && !selectedMfrs.includes(item.mfr)) {
        item.hidden = true;
        return item;
      }
      // filter pinburgh category
      if (selectedPinburghCat.length !== 0 && !selectedPinburghCat.includes(item.pinburgh_category)) {
        item.hidden = true;
        return item;
      }
      // filter year
      if (selectedYear.length !== 0) {
        const intYear = parseInt(item.year);
        selectedYear.forEach(range => {
          if (intYear < range[0] || intYear > range[1]) {
            item.hidden = true;
            return;
          } else {
            item.hidden = false;
          }
        });
        return item;
      }
      item.hidden = false;
      return item;
    });
    this.setState({ machines: new_machines });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="content">
        <h1>Machines</h1>
        <Grid columns={3} centered>
          <Grid.Row>
            <Grid.Column>
              <Segment padded textAlign='center'>
                <Label attached='top'>Filters</Label>
                <FilterManufacturer onChange={ this.selectManufacturer } />
                <FilterPinburgh onChange={ this.selectPinburghCat } />
                <FilterYear onChange={ this.selectYear } />
                <FilterSeason onChange={ this.selectSeason } />
                <FilterLocation onChange={ this.selectLocation } />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container>
          <Divider />
          <MachinesTable
            machines={ this.state.machines }
            sortFunction={ this.sortTable }
            reverseFunction={ this.reverseTable }
          />
        <Loader active={loading} inline='centered' />
        </Container>
      </div>
    );
  }
}

export default Machines;
