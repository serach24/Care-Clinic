import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";
import ava from './static/icon.jpg'
import { logout } from './../../auth/authUtil'
import { Popover } from "@material-ui/core";

/* Component for the Home page */

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { app } = this.props;
    this.state = {

      // the data below need a serverCall to get
      email: app.state.profile.mainmail,
      name: app.state.profile.realname,
      age: app.state.profile.age,
      icon: ava,
      changeEmail: false,
      changeAge: false,
      newage: 0,
      newemail: "a@a.a"
    };
  }
  SetAge(e) {
    this.setState({ newage: e.target.value })
  }
  SetEmail(e) {
    this.setState({ newemail: e.target.value })
  }

  FunctionAge() {
    if (!this.state.changeAge) {
      this.setState({
        changeAge: true
      })
    }
    else {
      //info backend
      this.setState({
        age: this.state.newage,
        changeAge: false
      })
    }
  }
  FunctionEmail() {
    if (!this.state.changeEmail) {
      this.setState({
        changeEmail: true
      })
    }
    else {
      //info backend
      this.setState({
        email: this.state.newemail,
        changeEmail: false
      })
    }
  }


  render() {
    const { app, open, onClose, anchorEl } = this.props;
    return (
      <Popover
        className="ProfileWindow"
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
      >

        <div className="FlowButtons">
          <div className="FlowButton">
            <Button fullWidth variant="filled" component={Link} to={"/"} onClick={() => logout(app)}>LogOut</Button>
          </div>
          <div className="FlowButton">
            {app.state.loginState !== 2 && <Button fullWidth component={Link} to={"/" + app.state.userId} variant="filled">Detail</Button>}
          </div>
        </div>
      </ Popover>
    );
  }
}

export default Profile;
