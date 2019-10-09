import React, { Component } from 'react';
import ResultTable from './ResultTable.jsx';
import { Container, Divider, Header, Icon } from 'semantic-ui-react';

class ResultsPane extends Component {
  render() {
    if (this.props.results.length !== 0) {
      return (
        <div>
          {this.props.results.map(group =>
            <React.Fragment>
              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='group' />
                  Group { group._id.group_id } ({ group.location })
                </Header>
              </Divider>
              <Container>
                <ResultTable data={ group } />
              </Container>
            </React.Fragment>
          )}
          <Divider />
        </div>
      );
    } else {
      return (
        <div>No results found.</div>
      );
    }
  }
}

export default ResultsPane;
