import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class WeeksPlayedFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: '1', value: 1, text: 'one' },
        { key: '2', value: 2, text: 'two' },
        { key: '3', value: 3, text: 'three' },
        { key: '4', value: 4, text: 'four' },
        { key: '5', value: 5, text: 'five' },
        { key: '6', value: 6, text: 'six' },
        { key: '7', value: 7, text: 'seven' },
        { key: '8', value: 8, text: 'eight' }
      ]
    }
  }

  dropdown() {
    return (
      <Dropdown
        inline
        options={this.state.options}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }

  render() {
    return (
      <div>
        Show players with at least {this.dropdown()} week(s) played.
      </div>
    );
  }
}

export default WeeksPlayedFilter;
