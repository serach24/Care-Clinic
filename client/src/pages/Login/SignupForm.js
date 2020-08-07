import React from "react";
import Button from "@material-ui/core/Button";

// material ui components
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import Input from "../../components/ui/Input";
import {signup} from "./../../auth/authUtil";

import "./styles.css";

/* Component for the Student Form */
class SignupForm extends React.Component {
  state = {
    username: "",
    password: "",
    realName: "",
    location: "",
    age: "",
    mainmail:"",
    phone:"",
    backupemail:"not setted yet",
    checkError: false,
  }

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      checkError: true,
    });
  }


  render() {
    const {app} = this.props;
    let isUsernameEmpty = this.state.checkError && this.state.username === "";
    let isPasswordEmpty = this.state.checkError && this.state.password === "";
    return (
      <Container component="main" maxWidth="xs">
        <h3> Sign up</h3>
        <Input
          error={isUsernameEmpty}
          helperText={isUsernameEmpty ? "Username cannot be empty." : ""}
          name="username"
          label="Username"
          autoFocus
          required
          value={this.state.username}
          onChange={this.handleInputChange}
        />

        <Input
          error={isPasswordEmpty}
          helperText={isPasswordEmpty ? "Password cannot be empty." : ""}
          name="password"
          label="Password"
          type="password"
          required
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <Input
          error={isPasswordEmpty}
          name="mainmail"
          label="Email"
          value={this.state.mainmail}
          onChange={this.handleInputChange}
        />
        <Input
          error={isPasswordEmpty}
          name="phone"
          label="Phone number"
          value={this.state.phone}
          onChange={this.handleInputChange}
        />
        <Input
          error={isPasswordEmpty}
          name="realName"
          label="Real Name"
          value={this.state.realName}
          onChange={this.handleInputChange}
        />

        <Input
          error={isPasswordEmpty}
          helperText={isPasswordEmpty ? "Password cannot be empty." : ""}
          name="location"
          label="Location"
          value={this.state.location}
          onChange={this.handleInputChange}
        />

        <Input
          error={isPasswordEmpty}
          helperText={isPasswordEmpty ? "Password cannot be empty." : ""}
          name="age"
          label="Age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />


        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => signup(this, app)}
          className="login-submit-button"
        >
          Sign up
        </Button>
        <div className="login-text">
          <div className="login-switch">
            <Link onClick={this.props.switch} variant="body2">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default SignupForm;
