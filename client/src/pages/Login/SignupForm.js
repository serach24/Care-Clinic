import React from "react";
import Button from "@material-ui/core/Button";

// material ui components
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
    gender:"",
    backupemail:"not setted yet",
    needVerify: false,
    checkError: false,
    Certification1:"not defined",
    Certification2:"not defined",
    level: 1,
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

  submitDoctor = (event) => {
    if(this.state.level === 1){
      this.setState({level:3});
    }
    else{
      this.setState({level:1});  
    }
    this.setState({
      needVerify: event.target.checked
    },()=> console.log(this.state.needVerify))
  }

  render() {
    const {app} = this.props;
    let isUsernameEmpty = this.state.checkError && this.state.username === "";
    let isPasswordEmpty = this.state.checkError && this.state.password === "";
    return (
      <Container component="main" maxWidth="xs">
        <h3> Sign up</h3>
        <FormControlLabel
        control={<Switch checked={this.state.needVerify} onChange={this.submitDoctor} name="needVerify" />}
        label="Sign up as a Doctor"
      />
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
          name="gender"
          label="gender"
          value={this.state.gender}
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
        {
          this.state.level===3&&
          (<Input
          error={isPasswordEmpty}
          helperText={isPasswordEmpty ? "Password cannot be empty." : ""}
          name="Certification1"
          label="Certification1"
          value={this.state.Certification1}
          onChange={this.handleInputChange}
        />)}
        {this.state.level===3&&
        (
        <Input
          error={isPasswordEmpty}
          helperText={isPasswordEmpty ? "Password cannot be empty." : ""}
          name="Certification2"
          label="Certification2"
          value={this.state.Certification2}
          onChange={this.handleInputChange}
        />)
        
        }

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
