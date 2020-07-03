import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
// import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Profile from './../../../pages/Profile';
import Chat from "./../../../components/Chat";
import "./styles.css";
import { Drawer } from '@material-ui/core';

const log = console.log;

class NavBar extends React.Component {

    state = {
      open:false,
      chatOpen:false,
      auth:false,
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

    openChat = () => {
      this.setState({
        chatOpen: true
      })
    }
    
    handleLoginClick = () => {
      log('click drawer');
      if (this.state.auth) {
        this.setState({
          auth: false
        });
      }
      else {
        this.setState({
          auth: true
        });
      }
    };

    closeChat = () => {
      this.setState({
        chatOpen: false
      })
    }
    
    render () {
        const { navbar_root } = this.props;
        return (
            <div className="navbar">
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
                                component={ Link } to={"/"} 
                                className="Home" >
                          Home
                        </Button>
                        <Button component={ Link } to={"/about"} color="inherit"
                                className="About" >About</Button>
                        {this.props.which==0 &&<Button component={ Link } to={"/login"} color="inherit"
                            className="TalkButton" >Talk to a Doctor</Button>}
                        {this.props.which==1 && <Button color="inherit"
                                component={ Link } to={"/doctorlist"}
                                className="TalkButton" >Talk to a Doctor</Button>}
                        {this.props.which==2 && <Button component={ Link } to={"/admin"} color="inherit"
                                className="TalkButton" >Admin</Button>}
                        {this.props.which!=2 && <Button component={ Link } to={"/feedback"} color="inherit"
                                className="TalkButton" >FeedBack</Button>}



                        <ChatOutlinedIcon className="chat-button" onClick={this.openChat}/>
                        
                        <Dialog open={this.state.chatOpen} onClose={this.closeChat}>
                          <Chat/>
                        </Dialog>

                        {this.props.which ==0 && !this.state.auth && <Button component={ Link } to={"/login"} color="inherit"
                                className="loginButton" >Login</Button>}
                            {this.props.which!=0 && <div className="ProfileButton"> Profile </div>}
                            {this.props.which!=0 && <div className="Profile"> <Profile which={this.props.which} change={this.props.change} UUid={this.props.UUid}></Profile> </div>}
                        {this.state.auth &&  <Button color="inherit" 
                                className="accountButton" >My Account</Button>}
                    </Toolbar>
                </AppBar>
                
                {/* <Drawer1 /> */}
            </div>

        );
    }
}

export default NavBar;
