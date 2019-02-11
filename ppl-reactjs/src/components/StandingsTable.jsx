import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class StandingsTable extends Component {
  render() {
    return (
      <Paper>
        <Table padding="dense">
          <TableHead>
            <TableRow>
              <TableCell>Player Name</TableCell>
              <TableCell>Total Points</TableCell>
              <TableCell>Adjusted Points</TableCell>
              <TableCell>Average Points</TableCell>
              <TableCell>Division</TableCell>
              <TableCell>Week 1</TableCell>
              <TableCell>Week 2</TableCell>
              <TableCell>Week 3</TableCell>
              <TableCell>Week 4</TableCell>
              <TableCell>Week 5</TableCell>
              <TableCell>Week 6</TableCell>
              <TableCell>Week 7</TableCell>
              <TableCell>Week 8</TableCell>
              <TableCell>Makeup Week</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.standings.map(i => {
                // reduce array of objects down to single object
                // [{week_id: x, points: y}, ...] => {<week_id>: <points>, ...}
                var week_points_obj = i.points.reduce((obj, item) => {
                  obj[item.week_id] = item.points;
                  return obj;
                }, {});
                return (
                  <TableRow>
                    <TableCell>{i._id.player}</TableCell>
                    <TableCell>{i.total_points}</TableCell>
                    <TableCell>???</TableCell>
                    <TableCell>{i.average_points.toFixed(2)}</TableCell>
                    <TableCell>X</TableCell>
                    {
                      [...Array(9).keys()].map(j => {
                        return (
                          <TableCell>{week_points_obj[j+1]}</TableCell>
                        );
                      })
                    }
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

export default StandingsTable;
