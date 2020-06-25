import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

import UserList from './../UserInformationAdmin';
import DoctorList from './../DoctorInformationAdmin';


class BanPanel extends React.Component {

      render() {
        return (
        <div className="WholeAdminPanel">
              <div className = "Panel" className="DoctorInfoTable">
              <h3>Doctors</h3>
            <DoctorList></DoctorList>
              <h3>Users</h3>
            <UserList></UserList>
              </div>
      </div>
    );
  }
}

export default BanPanel;
