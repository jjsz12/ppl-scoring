import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

class SeasonSelect extends Component {
  render() {
    return (
      <FormControl>
        <InputLabel>Season</InputLabel>
        <NativeSelect
          value={this.props.value}
          onChange={this.props.onChange}
          input={<Input name="season" id="season-native" />}
        >
          <option vaule={5}>5</option>
          <option vaule={6}>6</option>
          <option vaule={7}>7</option>
          <option vaule={8}>8</option>
          <option vaule={9}>9</option>
          <option vaule={10}>10</option>
          <option vaule={11}>11</option>
          <option vaule={12}>12</option>
          <option vaule={13}>13</option>
          <option vaule={14}>14</option>
          <option vaule={15}>15</option>
          <option vaule={16}>16</option>
        </NativeSelect>
      </FormControl>
    );
  }
}
 export default SeasonSelect;
