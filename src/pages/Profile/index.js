import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import ava from './static/icon.jpg'

/* Component for the Home page */

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email :'Boliu@liuB.o',
            name : 'Bo Liu lol',
            age : '1800',
            icon : ava,
            changeEmail : false,
            changeAge : false,
            newage : 0,
            newemail : "a@a.a"
        };
    }
            SetAge(e){
                this.setState({newage:e.target.value})
            }
            SetEmail(e){
                this.setState({newemail:e.target.value})
            }

        FunctionAge(){
            if(!this.state.changeAge){
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
            }}
        FunctionEmail(){
            if(!this.state.changeEmail){
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
            }}


      render() {
        return (
        <div className="ProfilePanel">
              <div className="Background"></div>
              <div className="UserDiv">
              <svg className="Username">
              <defs>
              <path id='CurveName' d="M0,57 a1,1 0 0,0 133,0" />
              </defs>
              <text className= "UserName">
                <textPath xlinkHref='#CurveName' >
                    {"   Welcome !       " +this.state.name}
                </textPath>
              </text>
              </svg>
              <img className="UserHeadPic" src= {ava}></img>


              <div
              className = "userInfo">
              <div className = "ProfileItem">
              {"Email: "+ this.state.email+"\n"}
              </div>
              <div className = "ProfileText">
              {this.state.changeEmail && (<TextField label="New Email" fullWidth={true} variant="filled" onChange ={this.SetEmail.bind(this)}></TextField>)}
              </div>
              <div className = "ProfileItem">
              <Button  variant="contained" onClick = {this.FunctionEmail.bind(this)} color="primary">change</Button>
              </div>
              <div className = "ProfileItem">
              {"Age: " + this.state.age+"\n"}
              </div>
              <div className = "ProfileText">
                  {this.state.changeAge && (<TextField label="New Age" fullWidth={true} variant="filled" onChange ={this.SetAge.bind(this)}></TextField>)}
              </div>
              <div className = "ProfileItem">
              <Button  variant="contained" onClick = {this.FunctionAge.bind(this)} color="primary">change</Button></div>
              </div>
      </div>
      </div>
    );
  }
}

export default Profile;
