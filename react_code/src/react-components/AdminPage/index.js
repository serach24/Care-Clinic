import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

/* Component for the Home page */
import RequestsList from './../RequestsAdmin'
import BanPanel from './../AdminBanPanel'


class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

      render() {
        return (
        <div className="Whole">
        <RequestsList></RequestsList>
        <BanPanel></BanPanel>
      </div>
    );
  }
}

export default AdminPage;
