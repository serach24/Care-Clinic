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
        const {app} = this.props;
        return (
          <div>
          <div className="ProfileContainer">
            <ProfileSide app={app}/>
          </div>
          {app.state.loginState ===1 && <div className="AppointmentsContainer">
              <Appointments app={app}/>
          </div>}
          {app.state.loginState ===1 && <div className="AppointmentsContainer">
              <PassedAppointments app={app} />
          </div>}
          {app.state.loginState ===3 && <div className="AppointmentsContainer">
              <DoctorPatientList app={app}/>
          </div>}
          </div>
    );
  }
}

export default ProfilePanel;
