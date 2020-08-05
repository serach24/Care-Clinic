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
        const {app} = this.props;
        return (
        <div className="ProfilePageWhole">
            <ProfilePanel app={app}></ProfilePanel>
      </div>
    );
  }
}

export default ProfilePage;
