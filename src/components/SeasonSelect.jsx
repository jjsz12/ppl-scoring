import React, { Component } from 'react';
import { Dropdown, Label } from 'semantic-ui-react';

class SeasonSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    };
  }

  fetchData() {
    console.log('Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/dates/seasons')
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/dates/seasons')
      .then(res => res.json())
      .then(dates => {
        let newDates = dates.map(item => {
          return {
            key: item._id,
            text: item._id + ' -- (' + item.start + ' - ' + item.end + ')',
            value: item._id
          };
        });
        this.setState({ dates: newDates })
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <Label
          horizontal
          pointing='right'
          size='large'
          color='black'
        >
          Season
        </Label>
        <Dropdown
          value={ this.props.value }
          onChange={ this.props.onChange }
          options={ this.state.dates }
          selection
          compact
        />
      </div>
    );
  }
}
 export default SeasonSelect;
