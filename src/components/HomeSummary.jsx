import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

class HomeSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: {},
    };
  }

  componentDidMount() {
    console.log(
      'Fetching: ' + process.env.REACT_APP_RELATIVE_PATH + '/summary'
    );
    fetch(process.env.REACT_APP_RELATIVE_PATH + '/summary')
      .then((res) => res.json())
      .then((summary) => {
        this.setState({ summary });
      });
  }

  render() {
    const { summary } = this.state;
    return (
      <List>
        {Object.keys(summary).map((key) => {
          return (
            <List.Item key={key}>
              <List.Content>{capitalize(key)}: {summary[key]}</List.Content>
            </List.Item>
          );
        })}
      </List>
    );
  }
}

export default HomeSummary;
