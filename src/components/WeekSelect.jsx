import React, { Component } from 'react';
import { Dropdown, Label } from 'semantic-ui-react';

class WeekSelect extends Component {
  render() {
    const options = [
      { key: 1, text: 1, value: 1 },
      { key: 2, text: 2, value: 2 },
      { key: 3, text: 3, value: 3 },
      { key: 4, text: 4, value: 4 },
      { key: 5, text: 5, value: 5 },
      { key: 6, text: 6, value: 6 },
      { key: 7, text: 7, value: 7 },
      { key: 8, text: 8, value: 8 },
      { key: 9, text: 9, value: 9 }
    ];

    return (
      <div>
        <Label
          horizontal
          pointing='right'
          size='large'
          color='black'
        >
          Week
        </Label>
        <Dropdown
          value={ this.props.value }
          onChange={ this.props.onChange }
          options={ options }
          selection
          compact
        />
      </div>
    );
  }
}

export default WeekSelect;
