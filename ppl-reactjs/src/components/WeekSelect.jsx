import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

class WeekSelect extends Component {
  render() {
    return (
      <FormControl>
        <InputLabel>Week</InputLabel>
        <NativeSelect
          value={this.props.value}
          onChange={this.props.onChange}
          input={<Input name="week" id="week-native" />}
        >
          <option vaule={1}>1</option>
          <option vaule={2}>2</option>
          <option vaule={3}>3</option>
          <option vaule={4}>4</option>
          <option vaule={5}>5</option>
          <option vaule={6}>6</option>
          <option vaule={7}>7</option>
          <option vaule={8}>8</option>
          <option vaule={9}>9</option>
        </NativeSelect>
      </FormControl>
    );
  }
}

export default WeekSelect;
