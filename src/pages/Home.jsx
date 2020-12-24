import React, { Component } from 'react';
import HomeSummary from '../components/HomeSummary.jsx';

class Home extends Component {
  render() {
    return (
      <div className="page-content">
        <h1>Home</h1>
        <br />
        <HomeSummary />
      </div>
    );
  }
}

export default Home;
