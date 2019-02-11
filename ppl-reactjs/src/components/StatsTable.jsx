import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class StatsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'adjusted_points',
      direction: 'descending'
    };
  }

  handleSort = (clickedColumn, accessorFunction) => () => {
    const { column, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        direction: 'descending',
      });
      this.props.sortFunction(accessorFunction);

      return;
    }

    this.setState({
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
    this.props.reverseFunction();
  }

  render() {
    const { column, direction } = this.state

    return (
      <Table sortable celled compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={ column === 'seed' ? direction : null}
              onClick={this.handleSort('seed', function(o) { return o.seed; })}
            >
              Seed
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'player_name' ? direction : null}
              onClick={this.handleSort('player_name', function(o) { return o.player; })}
            >
              Player
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'total_points' ? direction : null}
              onClick={this.handleSort('total_points', function(o) { return o.points[0].total_points; })}
            >
              Total Points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'adjusted_points' ? direction : null}
              onClick={this.handleSort('adjusted_points', function(o) { return o.points[0].adjusted_points; })}
            >
              Adjusted Points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'division' ? direction : null}
              onClick={this.handleSort('division', function(o) { return o.points[0].division; })}
            >
              Division
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'weeks_played' ? direction : null}
              onClick={this.handleSort('weeks_played', function(o) { return o.points[0].weeks_played; })}
            >
              Weeks Played
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'wins' ? direction : null}
              onClick={this.handleSort('wins', function(o) { return o.wins; })}
            >
              Wins
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'losses' ? direction : null}
              onClick={this.handleSort('losses', function(o) { return o.losses; })}
            >
              Losses
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'wp' ? direction : null}
              onClick={this.handleSort('wp', function(o) { return o.wp; })}
            >
              WP
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'owp' ? direction : null}
              onClick={this.handleSort('owp', function(o) { return o.owp; })}
            >
              OWP
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'oowp' ? direction : null}
              onClick={this.handleSort('oowp', function(o) { return o.oowp; })}
            >
              OOWP
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'sos' ? direction : null}
              onClick={this.handleSort('sos', function(o) { return o.sos; })}
            >
              SOS
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'rpi' ? direction : null}
              onClick={this.handleSort('rpi', function(o) { return o.rpi; })}
            >
              RPI
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.stats.map(item => {
              return (
                <Table.Row hidden={ item.hidden } key={ item.player }>
                  <Table.Cell>{ item.seed }</Table.Cell>
                  <Table.Cell>{ item.player }</Table.Cell>
                  <Table.Cell>{ item.points[0].total_points }</Table.Cell>
                  <Table.Cell>{ item.points[0].adjusted_points }</Table.Cell>
                  <Table.Cell bgcolor={ item.points[0].color }>{ item.points[0].division }</Table.Cell>
                  <Table.Cell>{ item.points[0].weeks_played }</Table.Cell>
                  <Table.Cell>{ item.wins }</Table.Cell>
                  <Table.Cell>{ item.losses }</Table.Cell>
                  <Table.Cell>{ item.wp.toFixed(3) }</Table.Cell>
                  <Table.Cell>{ item.owp.toFixed(3) }</Table.Cell>
                  <Table.Cell>{ item.oowp.toFixed(3) }</Table.Cell>
                  <Table.Cell>{ item.sos.toFixed(3) }</Table.Cell>
                  <Table.Cell>{ item.rpi.toFixed(3) }</Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    );
  }
}

export default StatsTable;
