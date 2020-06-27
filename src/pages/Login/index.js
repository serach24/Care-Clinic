import React from "react";

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import NavBar from "../../components/ui/NavBar";

/* Component for the Student Form */
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    formType: "login",
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
    return (
      <div className="form-wrap">
        <NavBar which={this.whichLogInStateAmI()} change={this.changeLogINState}/>
        {this.state.formType==="login" 
        ? <LoginForm which={this.props.which} change={this.props.change} switch={this.switchForm}/>
        : <SignupForm switch={this.switchForm}/>
        }
      </div>
    );
  }
}

export default Login;
