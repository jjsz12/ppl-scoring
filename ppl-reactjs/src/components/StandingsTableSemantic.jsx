import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class StandingsTableSemantic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'adjusted_points',
      direction: 'descending'
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.season !== this.props.season) {
      this.setState({
        column: 'adjusted_points',
        direction: 'descending'
      })
    }
  }

  handleSort = (clickedColumn, accessorFunction) => () => {
    const { column, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        direction: 'descending'
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
              sorted={column === 'seed' ? direction : null}
              onClick={this.handleSort('seed', function(o) { return o.seed; })}
            >
              Seed
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'player_name' ? direction : null}
              onClick={this.handleSort('player_name', function(o) { return o._id.player; })}
            >
              Player Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_points' ? direction : null}
              onClick={this.handleSort('total_points', function(o) { return o.total_points; })}
            >
              Total Points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'adjusted_points' ? direction : null}
              onClick={this.handleSort('adjusted_points', function(o) { return o.adjusted_points; })}
            >
              Adjusted Points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'average_points' ? direction : null}
              onClick={this.handleSort('average_points', function(o) { return o.average_points; })}
            >
              Average Points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'division' ? direction : null}
              onClick={this.handleSort('division', function(o) { return o.divison; })}
            >
              Division
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_1' ? direction : null}
              onClick={this.handleSort('week_1', function(o) { return o.points.week_1 || ''; })}
            >
              Week 1
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_2' ? direction : null}
              onClick={this.handleSort('week_2', function(o) { return o.points.week_2 || ''; })}
            >
              Week 2
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_3' ? direction : null}
              onClick={this.handleSort('week_3', function(o) { return o.points.week_3 || ''; })}
            >
              Week 3
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_4' ? direction : null}
              onClick={this.handleSort('week_4', function(o) { return o.points.week_4 || ''; })}
            >
              Week 4
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_5' ? direction : null}
              onClick={this.handleSort('week_5', function(o) { return o.points.week_5 || ''; })}
            >
              Week 5
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_6' ? direction : null}
              onClick={this.handleSort('week_6', function(o) { return o.points.week_6 || ''; })}
            >
              Week 6
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_7' ? direction : null}
              onClick={this.handleSort('week_7', function(o) { return o.points.week_7 || ''; })}
            >
              Week 7
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'week_8' ? direction : null}
              onClick={this.handleSort('week_8', function(o) { return o.points.week_8 || ''; })}
            >
              Week 8
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'makeup_week' ? direction : null}
              onClick={this.handleSort('makeup_week', function(o) { return o.points.week_9 || ''; })}
            >
              Makeup Week
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.standings.map(item => {
              return (
                <Table.Row hidden={ item.hidden } key={ item._id.player }>
                  <Table.Cell>{ item.seed }</Table.Cell>
                  <Table.Cell>{ item._id.player }</Table.Cell>
                  <Table.Cell>{ item.total_points }</Table.Cell>
                  <Table.Cell>{ item.adjusted_points }</Table.Cell>
                  <Table.Cell>{ item.average_points.toFixed(2) }</Table.Cell>
                  <Table.Cell bgcolor={ item.color }>{ item.division }</Table.Cell>
                  <Table.Cell>{ item.points.week_1 }</Table.Cell>
                  <Table.Cell>{ item.points.week_2 }</Table.Cell>
                  <Table.Cell>{ item.points.week_3 }</Table.Cell>
                  <Table.Cell>{ item.points.week_4 }</Table.Cell>
                  <Table.Cell>{ item.points.week_5 }</Table.Cell>
                  <Table.Cell>{ item.points.week_6 }</Table.Cell>
                  <Table.Cell>{ item.points.week_7 }</Table.Cell>
                  <Table.Cell>{ item.points.week_8 }</Table.Cell>
                  <Table.Cell>{ item.points.week_9 }</Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    );
  }
}

export default StandingsTableSemantic;
