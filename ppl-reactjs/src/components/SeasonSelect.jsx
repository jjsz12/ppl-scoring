import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

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
      .then(dates => this.setState({ dates: dates }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <FormControl>
        <InputLabel>Season</InputLabel>
        <NativeSelect
          value={this.props.value}
          onChange={this.props.onChange}
          input={<Input name="season" id="season-native" />}
        >
          {
            this.state.dates.map(item => {
              return (
                <option value={ item._id } key={ item._id }>
                  { item._id } -- ({ item.start } - { item.end })
                </option>
              );
            })
          }
        </NativeSelect>
      </FormControl>
    );
  }
}
 export default SeasonSelect;
