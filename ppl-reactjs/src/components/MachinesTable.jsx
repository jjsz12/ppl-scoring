import React, { Component } from 'react';
import {
  Label, List, Popup, Table,
} from 'semantic-ui-react';

const pinburghCategoryText = {
  1: 'EM',
  2: 'Early SS',
  3: 'Late SS/Early DMD',
  4: 'Late DMD/LCD',
  0: 'Uncategorized'
}

class MachinesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'title',
      direction: 'ascending'
    };
  }

  handleSort = (clickedColumn, accessorFunction) => () => {
    const { column, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        direction: 'ascending',
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
    const { machines } = this.props;
    const { column, direction } = this.state;
    console.log(machines);
    return (
      <Table sortable celled compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={ column === 'title' ? direction : null}
              onClick={this.handleSort('title', function(o) { return o.title_sort; })}
            >
              Title
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'mfr' ? direction : null}
              onClick={this.handleSort('mfr', function(o) { return o.mfr; })}
            >
              Manufacturer
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'year' ? direction : null}
              onClick={this.handleSort('year', function(o) { return o.year; })}
            >
              Year
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'pinburgh_category' ? direction : null}
              onClick={this.handleSort('pinburgh_category', function(o) { return o.pinburgh_category; })}
            >
              Pinburgh Category
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'scores' ? direction : null}
              onClick={this.handleSort('scores', function(o) { return o.score_count; })}
            >
              Scores
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'groups' ? direction : null}
              onClick={this.handleSort('groups', function(o) { return o.group_count; })}
            >
              Groups
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={ column === 'locations' ? direction : null}
              onClick={this.handleSort('locations', function(o) { return o.locations.length; })}
            >
              Locations
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.machines.map(item => {
              item.locations.sort();
              return (
                <Table.Row hidden={ item.hidden } key={ item.title }>
                  <Table.Cell>{ item.title }</Table.Cell>
                  <Table.Cell>{ item.mfr }</Table.Cell>
                  <Table.Cell>{ item.year }</Table.Cell>
                  <Table.Cell>{ pinburghCategoryText[item.pinburgh_category] }</Table.Cell>
                  <Table.Cell>{ item.score_count }</Table.Cell>
                  <Table.Cell>{ item.group_count }</Table.Cell>
                  <Table.Cell>
                    <Popup
                      trigger={<Label>{ item.locations.length }</Label>}
                      content={
                        <List>
                          {
                            item.locations.map(loc => {
                              return (<List.Item key={loc}>{loc}</List.Item>);
                            })
                          }
                        </List>
                      }
                      size='mini'
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    );
  }
}

export default MachinesTable;
