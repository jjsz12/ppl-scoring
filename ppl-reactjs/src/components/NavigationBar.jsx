import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/results">
              <Button color="inherit">Results</Button>
            </Link>
            <Link to="/standings">
              <Button color="inherit">Standings</Button>
            </Link>
            <Link to="/stats">
              <Button color="inherit">Stats</Button>
            </Link>
            <Link to="/players">
              <Button color="inherit">Players</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationBar;
