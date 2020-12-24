import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class FilterManufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    console.log(
      'Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/manufacturers'
    );
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/manufacturers')
      .then((res) => res.json())
      .then((mfrs) => {
        // console.log(mfrs);
        const options = mfrs.map((item) => {
          return { key: item, value: item, text: item };
        });
        // console.log(options);
        this.setState({ options: options });
      });
  }

  render() {
    return (
      <Dropdown
        fluid
        multiple
        selection
        closeOnChange
        placeholder="Manufacturers"
        options={this.state.options}
        onChange={this.props.onChange}
      />
    );
  }
}

FilterManufacturer.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterManufacturer;
