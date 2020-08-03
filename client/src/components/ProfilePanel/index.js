import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import  ProfileSide from './../ProfileSide'
import Appointments from './../Appointments'
import PassedAppointments from './../PassedAppointments'
import DoctorPatientList from './../../components/DoctorPatientList'
/* Component for the Home page */

class ProfilePanel extends React.Component {
    constructor(props) {
        super(props);
    }
      render() {
        return (
          <div>
          <div className="ProfileContainer">
            <ProfileSide which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
          </div>
          {this.props.which===1 && <div className="AppointmentsContainer">
              <Appointments which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
          </div>}
          {this.props.which===1 && <div className="AppointmentsContainer">
              <PassedAppointments which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
          </div>}
          {this.props.which===3 && <div className="AppointmentsContainer">
              <DoctorPatientList which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
          </div>}
          </div>
    );
  }
}

export default ProfilePanel;
