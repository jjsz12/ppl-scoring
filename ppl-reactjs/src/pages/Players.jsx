import React, { Component } from 'react';
import PlayerSelect from '../components/PlayerSelect.jsx';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      selected: ''
    };
  }

  fetchData() {
    console.log('Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/players')
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/players')
      .then(res => res.json())
      .then(playersList => {
        return playersList.map(item => {
          return {
            key: item,
            value: item,
            text: item
          };
        })
      })
      .then(players => this.setState({ players: players }));
  }

  componentDidMount() {
    this.fetchData();
  }

  handlePlayerSelect = (e, { value }) => {
    this.setState({ selected: value });
  }

  render() {
    return (
      <div>
        <h1>Players</h1>
        <PlayerSelect
          players={this.state.players}
          onChange={this.handlePlayerSelect}
        />
        <h5>{this.state.selected}</h5>
      </div>
    );
  }
}

export default Players;
