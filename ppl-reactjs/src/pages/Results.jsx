import React, { Component } from 'react';
import ResultsGrid from '../components/ResultsGrid.jsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

class Results extends Component {
  state = {
    results: [],
    season: 14,
    week: 1
  }

  fetchData() {
    fetch('/results/' + this.state.season + '/' + this.state.week)
      .then(res => res.json())
      .then(results => this.setState({ results: results }))
      .then(console.log(this.state));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, this.fetchData);
  };

  render() {
    return (
      <div>
        <h1>Results</h1>
        <FormControl>
          <InputLabel>Season</InputLabel>
          <NativeSelect
            value={this.state.season}
            defaultValue={14}
            onChange={this.handleChange}
            input={<Input name="season" id="season-native" />}
          >
            <option vaule={13}>13</option>
            <option vaule={14}>14</option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel>Week</InputLabel>
          <NativeSelect
            value={this.state.week}
            defaultValue={1}
            onChange={this.handleChange}
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
        <ResultsGrid results={this.state.results}/>
      </div>
    );
  }
}

export default Results;
