import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

class FilterYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { key: '0', value: [1900, 1969], text: '1900-1969' },
        { key: '1', value: [1970, 1974], text: '1970-1974' },
        { key: '2', value: [1975, 1979], text: '1975-1979' },
        { key: '3', value: [1980, 1984], text: '1980-1984' },
        { key: '4', value: [1985, 1989], text: '1985-1989' },
        { key: '5', value: [1990, 1994], text: '1990-1994' },
        { key: '6', value: [1995, 1999], text: '1995-1999' },
        { key: '7', value: [2000, 2004], text: '2000-2004' },
        { key: '8', value: [2005, 2009], text: '2005-2009' },
        { key: '9', value: [2010, 2014], text: '2010-2014' },
        { key: '10', value: [2015, 2019], text: '2015-2019' },
        { key: '11', value: [2020, 2024], text: '2020-2024' },
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
        placeholder="Year"
        options={this.state.options}
        onChange={this.props.onChange}
      />
    );
  }
}

FilterYear.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterYear;
