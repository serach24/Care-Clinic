import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import ProfilePanel from "./../../components/ProfilePanel"
import NavBar from "../../components/ui/NavBar";
/* Component for the Home page */

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Uid: "000000"
        };
    }


      render() {
        return (
        <div className="ProfilePageWhole">
            <NavBar which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
            <ProfilePanel which={this.props.which} change={this.props.change} UUid={this.props.UUid}></ProfilePanel>
      </div>
    );
  }
}

export default ProfilePage;
