import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

class PlayerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  render() {
    return (
      <Dropdown
        placeholder="Select a player..."
        search
        selection
        options={this.props.players}
        onChange={this.props.onChange}
      />
    );
  }
}

export default PlayerSelect;
