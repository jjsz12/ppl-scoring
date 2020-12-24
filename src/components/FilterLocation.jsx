import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class FilterLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    console.log(
      'Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/locations'
    );
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/locations')
      .then((res) => res.json())
      .then((locs) => {
        console.log(locs);
        const locOptions = locs.map((item) => {
          return {
            key: item,
            text: item,
            value: item,
          };
        });
        this.setState({ options: locOptions });
      });
  }

  render() {
    return (
      <Dropdown
        fluid
        multiple
        selection
        closeOnChange
        placeholder="Location"
        options={this.state.options}
        onChange={this.props.onChange}
      />
    );
  }
}

FilterLocation.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterLocation;
