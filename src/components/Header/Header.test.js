
import React from 'react';
import renderer from 'react-test-renderer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Header from './Header';

const anchorEl  = null;
const open = Boolean(anchorEl);


describe('Header', () => {
  test('renders children correctly', () => {
    const wrapper = renderer
      .create(
        <Header>
          <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" color="inherit" >
              GapMaps Admin
            </Typography>
              <div>
                <IconButton aria-owns={open ? 'menu-appbar' : undefined} aria-haspopup="true" onClick={jest.fn()} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={jest.fn()}>
                  <MenuItem onClick={jest.fn()}>Logout</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
        </Header>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
