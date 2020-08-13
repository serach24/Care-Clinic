import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import ava from './static/icon.jpg'
import UserAvatar from './../../components/UserAvatar'
import {logout} from './../../auth/authUtil'

/* Component for the Home page */

class Profile extends React.Component {
    constructor(props) {
        super(props);
        const {app} = this.props;
        this.state = {

            // the data below need a serverCall to get
            email :app.state.profile.mainmail,
            name : app.state.profile.realname,
            age : app.state.profile.age,
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
          const {app} = this.props;
        return (
        <div className="ProfileWindow">
              <div className="FlowAvatar">
              <UserAvatar app={app}/>
              </div>
              <div className="FlowButtons">
              <div className ="FlowButton">
              <Button variant="contained" component={ Link } to={"/"} onClick = {()=>logout(app)}>LogOut</Button>
              </div>
              <div className ="FlowButton">
              {app.state.loginState!=2 && <Button component={ Link } to={"/"+app.state.userId} variant="contained">Detail</Button>}
              </div>
              </div>
      </div>
    );
  }
}

export default Profile;