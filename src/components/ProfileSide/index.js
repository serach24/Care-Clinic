import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import UserAvatar  from './../UserAvatar'

/* Component for the Home page */

class ProfileSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //State should be setted by call backend with Uid this.props.UUid
            mainEmail : 'User@user.com',
            email :'Boliu@liuB.o',
            age: 200,
            name : 'Bo Liu',
            type: "not loged in",
            phone : '180000000',
            changeEmail : false,
            changePhone : false,
            newphone : 0,
            newemail : "a@a.a"
        };
    }
            SetPhone(e){
                this.setState({newphone:e.target.value})
            }
            SetEmail(e){
                this.setState({newemail:e.target.value})
            }

        FunctionPhone(){
            if(!this.state.changePhone){
                this.setState({
                    changePhone: true
                })
            }
            else {
                //info backend
                this.setState({
                    phone: this.state.newphone,
                    changePhone: false
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
              <div className="Background">
              <div className="UserDiv">
                <UserAvatar></UserAvatar>
              <div
              className = "userInfo">
              <div className = "ProfileItem">
              {(this.props.which==0 && "User Type: Developer")}
              {(this.props.which==1 && "User Type: User")}
              {(this.props.which==2 && "User Type: Admin")}
              {(this.props.which==3 && "User Type: Doctor")}
              </div>
              <div className = "ProfileItem">
              {"User Uid: "+ this.props.UUid +"\n"}
              </div>
              <div className = "ProfileItem">
              {"Main Email: "+ this.state.mainEmail+"\n"}
              </div>
              <div className = "ProfileItem">
              {"Age: "+ this.state.age+"\n"}
              </div>
              <div className = "ProfileItem">
              {"Backup Email: "+ this.state.email+"\n"}
              </div>
              <div className = "ProfileText">
              {this.state.changeEmail && (<TextField label="New Email" fullWidth={true} variant="filled" onChange ={this.SetEmail.bind(this)}></TextField>)}
              </div>
              <div className = "ProfileItem">
              <Button  variant="contained" onClick = {this.FunctionEmail.bind(this)} color="primary">change</Button>
              </div>
              <div className = "ProfileItem">
              {"PhoneNumbe: " + this.state.phone+"\n"}
              </div>
              <div className = "ProfileText">
                  {this.state.changePhone && (<TextField label="New PhoneNumber" fullWidth={true} variant="filled" onChange ={this.SetPhone.bind(this)}></TextField>)}
              </div>
              <div className = "ProfileItem">
              <Button  variant="contained" onClick = {this.FunctionPhone.bind(this)} color="primary">change</Button></div>
              </div>
          </div>
      </div>
          </div>
    );
  }
}

export default ProfileSide;
