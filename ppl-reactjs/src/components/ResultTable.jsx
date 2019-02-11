import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ResultTable extends Component {
  render() {
    return (
      <Paper>
        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell>Group {this.props.data._id.group_id} ({this.props.data.location})</TableCell>
              <TableCell colSpan={2}>{this.props.data.games[0]}</TableCell>
              <TableCell colSpan={2}>{this.props.data.games[1]}</TableCell>
              <TableCell colSpan={2}>{this.props.data.games[2]}</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Players</TableCell>
              <TableCell>Game 1 Scores </TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Game 2 Scores </TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Game 3 Scores </TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Total Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.data.results.map(i => {
                let totalPoints = 0;
                return (
                  <TableRow>
                    <TableCell>{i.player}</TableCell>
                    {
                      i.scores.map(j => {
                        totalPoints += j.points;
                        return (
                          <React.Fragment>
                            <TableCell>{j.score}</TableCell>
                            <TableCell>{j.points}</TableCell>
                          </React.Fragment>
                        );
                      })
                    }
                    <TableCell>{totalPoints}</TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default ResultTable;
