import React from "react";
import Button from "@material-ui/core/Button";
import  { Redirect } from 'react-router-dom'

// material ui components
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Input from "../../components/ui/Input";

import "./styles.css";

/* Component for the Student Form */
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

  state = {
    username: "",
    password: "",
    checkError: false,
    loginState: 0,
  }

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.setState({
      checkError: true,
    });
    if (username==="user" && password==="user"){
      this.setState({loginState: 1});
      this.props.change(1);

    } else if (username==="admin" && password==="admin"){
      this.setState({loginState: 2})
      this.props.change(2);

    }
  }

  render() {
    let isUsernameEmpty = this.state.checkError && this.state.username === "";
    let isPasswordEmpty = this.state.checkError && this.state.password === "";
    if (this.state.loginState != 0){
      return <Redirect to={"/"}/>
     }
    return (
      <Container component="main" maxWidth="xs">
        <h3> Login </h3>
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
        <Link className="login-submit-button-link">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.handleSubmit}
          className="login-submit-button"
          id="login-submit-button"
        >
          Login
        </Button>
        </Link>
        <div className="login-text">
          <div className="login-switch">
            <Link onClick={this.props.switch} variant="body2">
              Don't have an account? Sign Up
            </Link>
          </div>
          {/* <div id="forget-pwd">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </div> */}
        </div>
      </Container>
    );
  }
}

export default LoginForm;
