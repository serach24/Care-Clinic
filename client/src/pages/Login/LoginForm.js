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

  state = {
    username: "",
    password: "",
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
    const username = this.state.username;
    const password = this.state.password;
    this.setState({
      checkError: true,
    });
    // Login()
    // if (username==="user" && password==="user"){
    //   this.setState({loginState: 1});
    //   this.props.change(1);
    //   this.props.SetUUid("UserId000");

    // } else if (username==="admin" && password==="admin"){
    //   this.setState({loginState: 2})
    //   this.props.change(2);
    //   this.props.SetUUid("AdminId000");
    // }
    // else if (username==="user2" && password==="user2"){
    // this.setState({loginState: 3})
    // this.props.change(3);
    // this.props.SetUUid("BoluoLiuDoctor");
    // }
  }

  render() {
    const {app , login} = this.props;
    let isUsernameEmpty = this.state.checkError && this.state.username === "";
    let isPasswordEmpty = this.state.checkError && this.state.password === "";
    if (app.state.loginState !== 0){
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
          onClick={()=>login(this, app)}
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