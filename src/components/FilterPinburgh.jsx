import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class FilterPinburgh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: '1', value: 1, text: 'EM' },
        { key: '2', value: 2, text: 'Early SS' },
        { key: '3', value: 3, text: 'Late SS/Early DMD' },
        { key: '4', value: 4, text: 'Late DMD/LCD' },
        { key: '0', value: 0, text: 'Uncategorized' },
      ],
    };
  }

  render() {
    return (
      <Dropdown
        fluid
        multiple
        selection
        closeOnChange
        placeholder="Pinburgh Category"
        options={this.state.options}
        onChange={this.props.onChange}
      />
    );
  }
}

FilterPinburgh.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterPinburgh;
