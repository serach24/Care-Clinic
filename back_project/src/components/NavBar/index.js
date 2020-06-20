import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import "./styles.css";

const log = console.log;

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secons: 0

        }
    };
    handleClick = () => {
        log('click drawer');
    };
    
    render () {
        const { root, menuButton, title} = this.props;
        return (
            <div className={root}>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" 
                                    onClick = {this.handleClick}
                                    className={menuButton} >
                            <MenuIcon />
                        </IconButton>
                        <Button color="inherit" className="Home" >Home</Button>
                        <Button color="inherit" className="About" >About</Button>
                        <Button color="inherit" className="TalkButton" >Talk to a Doctor</Button>
                        <Button color="inherit" className="loginButton" >Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="persistent" anchor="left" open={false}>
                    <div>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    </div>
                </Drawer>
            </div>

        );
    }
}

export default NavBar;