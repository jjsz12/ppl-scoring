import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class ResultTable extends Component {
  render() {
    return (
      <Table singleLine celled structured columns={8}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='2'>Players</Table.HeaderCell>
            <Table.HeaderCell colSpan='2' textAlign='center'>{ this.props.data.games[0] }</Table.HeaderCell>
            <Table.HeaderCell colSpan='2' textAlign='center'>{ this.props.data.games[1] }</Table.HeaderCell>
            <Table.HeaderCell colSpan='2' textAlign='center'>{ this.props.data.games[2] }</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Total Points</Table.HeaderCell>
          </Table.Row>
          <Table.Row>

            <Table.HeaderCell>Scores</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
            <Table.HeaderCell>Scores</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
            <Table.HeaderCell>Scores</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.data.results.map(i => {
              let totalPoints = 0;
              return (
                <Table.Row>
                  <Table.Cell>{ i.player }</Table.Cell>
                  {
                    i.scores.map(j => {
                      totalPoints += j.points;
                      return (
                        <React.Fragment>
                          <Table.Cell>{ j.score }</Table.Cell>
                          <Table.Cell>{ j.points }</Table.Cell>
                        </React.Fragment>
                      );
                    })
                  }
                  <Table.Cell>{ totalPoints }</Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    );
  }
}

export default ResultTable;
