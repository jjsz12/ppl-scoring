import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className="navigation">
        <Menu fixed="top" inverted>
          <Link to="/">
            <Menu.Item
              name='home'
              active={this.state.activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
          </Link>
          <Link to="/results">
            <Menu.Item
              name='results'
              active={this.state.activeItem === 'results'}
              onClick={this.handleItemClick}
            >
              Results
            </Menu.Item>
          </Link>
          <Link to="/standings">
            <Menu.Item
              name='standings'
              active={this.state.activeItem === 'standings'}
              onClick={this.handleItemClick}
            >
              Standings
            </Menu.Item>
          </Link>
          <Link to="/stats">
            <Menu.Item
              name='stats'
              active={this.state.activeItem === 'stats'}
              onClick={this.handleItemClick}
            >
              Stats
            </Menu.Item>
          </Link>
          <Link to="/players">
            <Menu.Item
              name='players'
              active={this.state.activeItem === 'players'}
              onClick={this.handleItemClick}
            >
              Players
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default NavigationBar;
