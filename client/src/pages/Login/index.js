import React from "react";

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import {LoginRequest} from "./../../auth/authUtil"

/* Component for the Student Form */
class Login extends React.Component {
  state = {
    formType: "login",
    
    // the data below need a serverCall to get
    users: [
      { "username": "user", "password": "user" },
      { "username": "admin", "password": "admin" }
    ],
  }

  switchForm = ()=>{
    if (this.state.formType==="login"){
      this.setState({
        formType: "signup"
      })
    }
    else {this.setState({
      formType: "login"
      })
    }
  }

  render() {
    const {app} = this.props
    return (
      <div className="form-wrap">
        {this.state.formType==="login" 
        ? <LoginForm  app={app} switch={this.switchForm} login={LoginRequest}/>
        : <SignupForm app={app} switch={this.switchForm}/>
        }
      </div>
    );
  }
}

export default Login;
