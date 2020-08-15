import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


import Profile from './../../../pages/Profile';
import "./styles.css";

const log = console.log;

export const styles = theme => ({
  appBar: {
    color: '#fff',
    backgroundColor: '#4fc9a5'
  }

});

class NavBar extends React.Component {

  state = {
    auth: false,
    profileAnchor: null,
    people: []
  }


  handleProfileClick = (e) => {
    if (this.state.profileAnchor === null) {
      this.setState({
        profileAnchor: e.currentTarget,
      });
    }
    else {
      this.setState({
        profileAnchor: null,
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

  closeProfile = () => {
    this.setState({
      profileAnchor: null,
    })
  }

  render() {
    const { app, classes } = this.props;
    const open = Boolean(this.state.profileAnchor);
    return (
      <div className="navbar">
        <AppBar position="fixed" className={classes.appBar} color="secondary">
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
            {app.state.loginState === 0 && <Button component={Link} to={"/login"} color="inherit"
              className="TalkToADoctor" >Talk to a Doctor</Button>}
            {app.state.loginState === 1 && <Button color="inherit"
              component={Link} to={"/doctorlist"}
              className="TalkToADoctor" >Talk to a Doctor</Button>}
            {app.state.loginState === 2 && <Button component={Link} to={"/admin"} color="inherit"
              className="Admin" >Admin</Button>}
            {app.state.loginState !== 2 && <Button component={Link} to={"/feedback"} color="inherit"
              className="FeedBack" >FeedBack</Button>}
            {app.state.loginState === 1 && <Button component={Link} to={"/appointment"} color="inherit"
              className="Appointment" > My Appointments</Button>}
            {app.state.loginState === 3 && <Button component={Link} to={"/patientList"} color="inherit"
              className="PatientList" > My Patients </Button>}



            {/* {app.state.loginState !== 0 && <ChatOutlinedIcon className="chat-button" onClick={this.handleClick} />}
            <ChatPeople userId={this.props.userId} open={open} anchorEl={this.state.chatPeopleAnchor} onClose={this.closeChat} /> */}

            {app.state.loginState === 0 && !this.state.auth && <Button component={Link} to={"/login"} color="inherit"
              className="loginButton" >Login</Button>}
            {app.state.loginState !== 0 && <div className="ProfileButton"> Profile </div>}
            {app.state.loginState !== 0 && <div className="Profile"> 
              <Profile open={open} app={app} anchorEl={this.state.profileAnchor} onClose={this.closeProfile} ></Profile> </div>
            }
            {this.state.auth && <Button color="inherit"
              className="accountButton" >My Account</Button>}
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}

export default withStyles(styles, { withTheme: false })(NavBar);