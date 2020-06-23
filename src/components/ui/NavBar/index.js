import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "./styles.css";
import { Drawer } from '@material-ui/core';

const log = console.log;

// matrial-ui website simple menu
function DropMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton edge="start" 
                    onClick = {handleClick}
                    className="menuButton" >
            <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Appointment</MenuItem>
          <MenuItem onClick={handleClose}>prescription</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }


class NavBar extends React.Component {

    state = {
      open:false
    }

    handleClick = () => {
        log('click drawer');
        if (this.state.open) {
          this.setState({
            open: false
          });
        }
        else {
          this.setState({
            open: true
          });
        }
    };


    render () {
        const { navbar_root } = this.props;
        return (
            <div className={navbar_root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" 
                            onClick = {this.handleClick}
                            className="menuButton" >
                            <MenuIcon />
                        </IconButton>
                        <Drawer className="drawer" variant="persistent" open={this.state.open}>
                            <Toolbar />
                            <Button color="inherit" className="Home" >1</Button>
                            <Button color="inherit" className="About" >2</Button>
                        </Drawer>
                        <Button color="inherit" 
                                onClick = {this.handleClick}
                                className="Home" >
                          Home
                        </Button>
                        <Button color="inherit" 
                                onClick = {this.handleClick}
                                className="About" >About</Button>
                        <Button color="inherit"
                                onClick = {this.handleClick} 
                                className="TalkButton" >Talk to a Doctor</Button>
                        <Link to={"../../../pages/Login"}>
                        <Button color="inherit" 
                                className="loginButton" >Login</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                
                {/* <Drawer1 /> */}
            </div>

        );
    }
}

export default NavBar;