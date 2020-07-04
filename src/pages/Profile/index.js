import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import ava from './static/icon.jpg'
import UserAvatar from './../../components/UserAvatar'

/* Component for the Home page */

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            // the data below need a serverCall to get
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
        <div className="ProfileWindow">
              <div className="FlowAvatar">
              <UserAvatar UUid={this.props.UUid}/>
              </div>
              <div className="FlowButtons">
              <div className ="FlowButton">
              <Button variant="contained" component={ Link } to={"/"} onClick = {()=>(this.props.change(0))}>LogOut</Button>
              </div>
              <div className ="FlowButton">
              {this.props.which!=2 && <Button component={ Link } to={"/"+this.props.UUid} variant="contained">Detail</Button>}
              </div>
              </div>
      </div>
    );
  }
}

export default Profile;
