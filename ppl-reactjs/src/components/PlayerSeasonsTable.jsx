import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import { ordinal_suffix_of } from '../util';

class PlayerSeasonsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      dates: []
    };
  }

  fetchData() {
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/player/' + this.props.player)
      .then(res => res.json())
      .then(stats => this.setState({ stats: stats }));
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/dates/seasons')
      .then(res => res.json())
      .then(dates => this.setState({ dates: dates }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.player !== this.props.player) {
      this.fetchData();
    }
  }

  render() {
    return (
      <Table celled compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Season ID
            </Table.HeaderCell>
            <Table.HeaderCell>
              Total Points
            </Table.HeaderCell>
            <Table.HeaderCell>
              Adjusted Points
            </Table.HeaderCell>
            <Table.HeaderCell>
              Division
            </Table.HeaderCell>
            <Table.HeaderCell>
              Wins
            </Table.HeaderCell>
            <Table.HeaderCell>
              Losses
            </Table.HeaderCell>
            <Table.HeaderCell>
              WP
            </Table.HeaderCell>
            <Table.HeaderCell>
              OWP
            </Table.HeaderCell>
            <Table.HeaderCell>
              OOWP
            </Table.HeaderCell>
            <Table.HeaderCell>
              SOS
            </Table.HeaderCell>
            <Table.HeaderCell>
              RPI
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.state.stats.map(item => {
              let dates = _.find(this.state.dates, (o) => {
                return (o._id === item.season_id)
              });
              let dates_text = dates ?
                ' -- (' + dates.start + ' - ' + dates.end + ')' :
                '';
              return (
                <Table.Row key={ item.season_id }>
                  <Table.Cell>{ item.season_id }{ dates_text }</Table.Cell>
                  <Table.Cell>{ item.points[0].total_points }</Table.Cell>
                  <Table.Cell>{ item.points[0].adjusted_points }</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>{ item.wins }</Table.Cell>
                  <Table.Cell>{ item.losses }</Table.Cell>
                  <Table.Cell>{ item.wp.toFixed(3) } ({ ordinal_suffix_of(item.wp_rank) })</Table.Cell>
                  <Table.Cell>{ item.owp.toFixed(3) } ({ ordinal_suffix_of(item.owp_rank) })</Table.Cell>
                  <Table.Cell>{ item.oowp.toFixed(3) } ({ ordinal_suffix_of(item.oowp_rank) })</Table.Cell>
                  <Table.Cell>{ item.sos.toFixed(3) } ({ ordinal_suffix_of(item.sos_rank) })</Table.Cell>
                  <Table.Cell>{ item.rpi.toFixed(3) } ({ ordinal_suffix_of(item.rpi_rank) })</Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    );
  }
}

export default PlayerSeasonsTable;
