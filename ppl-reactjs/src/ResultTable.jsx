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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Group {this.props.data._id} ({this.props.data.location})</TableCell>
              <TableCell colSpan={2}>{this.props.data.scores[0].scores[0].game_name}</TableCell>
              <TableCell colSpan={2}>{this.props.data.scores[0].scores[1].game_name}</TableCell>
              <TableCell colSpan={2}>{this.props.data.scores[0].scores[2].game_name}</TableCell>
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
            {this.props.data.scores.map(n => {
              let totalPoints = 0;
              return (
                <TableRow>
                  <TableCell>{n.player}</TableCell>
                    {n.scores.map(s => {
                      totalPoints += s.points;
                      return (
                        <React.Fragment>
                          <TableCell>{s.score}</TableCell>
                          <TableCell>{s.points}</TableCell>
                        </React.Fragment>
                      );
                    })}
                  <TableCell>{totalPoints}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default ResultTable;
