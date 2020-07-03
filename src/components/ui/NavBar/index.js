import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';


import Profile from './../../../pages/Profile';
import Chat from "./../../../components/Chat";
import "./styles.css";
import ChatPeople from '../../ChatPeople';


const log = console.log;

class NavBar extends React.Component {

  state = {
    auth: false,
    chatPeopleAnchor: null
  }


  handleClick = (e) => {
    if (this.state.chatPeopleAnchor === null) {
      this.setState({
        chatPeopleAnchor: e.currentTarget,
      });
    }
    else {
      this.setState({
        chatPeopleAnchor: null,
      });
    }
  };

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
  }

  closeChat = () => {
    this.setState({
      chatPeopleAnchor: null,
    })
  }

  render() {
    const { navbar_root } = this.props;
    const open = Boolean(this.state.chatPeopleAnchor);
    return (
      <div className="navbar">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" 
                        className="menuButton" >
                <LocalHospitalIcon fontSize="large" />
            </IconButton>
            <Button color="inherit"
              component={Link} to={"/"}
              className="Home" >
              Home
                        </Button>
            <Button component={Link} to={"/about"} color="inherit"
              className="About" >About</Button>
            {this.props.which === 0 && <Button component={Link} to={"/login"} color="inherit"
              className="TalkButton" >Talk to a Doctor</Button>}
            {this.props.which === 1 && <Button color="inherit"
              component={ Link } to={"/doctorlist"}
              className="TalkButton" >Talk to a Doctor</Button>}
            {this.props.which === 2 && <Button component={Link} to={"/admin"} color="inherit"
              className="TalkButton" >Admin</Button>}
            {this.props.which !== 2 && <Button component={Link} to={"/feedback"} color="inherit"
              className="TalkButton" >FeedBack</Button>}



            <ChatOutlinedIcon className="chat-button" onClick={this.handleClick} />

            <ChatPeople open={open} anchorEl={this.state.chatPeopleAnchor} onClose={this.closeChat} />

            {this.props.which === 0 && !this.state.auth && <Button component={Link} to={"/login"} color="inherit"
              className="loginButton" >Login</Button>}
            {this.props.which !== 0 && <div className="ProfileButton"> Profile </div>}
            {this.props.which !== 0 && <div className="Profile"> <Profile which={this.props.which} change={this.props.change} UUid={this.props.UUid}></Profile> </div>}
            {this.state.auth && <Button color="inherit"
              className="accountButton" >My Account</Button>}
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}

export default NavBar;
