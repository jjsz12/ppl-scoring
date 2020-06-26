import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class FilterSeason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    console.log('Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/dates/seasons')
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/dates/seasons')
      .then(res => res.json())
      .then(dates => {
        console.log(dates);
        let newDates = dates.map(item => {
          return {
            key: item._id,
            text: item._id + ' -- (' + item.start + ' - ' + item.end + ')',
            value: item._id
          };
        });
        this.setState({ options: newDates })
      });
  }

  render() {
    return (
      <Dropdown
        fluid
        multiple
        selection
        closeOnChange
        placeholder='Season'
        options={ this.state.options }
        onChange={ this.props.onChange }
      />
    )
  }
}

export default FilterSeason;
