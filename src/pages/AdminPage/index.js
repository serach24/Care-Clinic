import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';

import "./styles.css";

/* Component for the Home page */
import RequestsList from '../../components/Admin/RequestsAdmin'
import BanPanel from '../../components/Admin/AdminBanPanel'
import PendingDoctors from '../../components/Admin/PendingDoctorInformationAdmin';
import NavBar from "../../components/ui/NavBar";


class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.Messages = React.createRef();
        this.PendingDocs = React.createRef();
        this.BanPan = React.createRef();
    }

    GotoElement(event){
        const target = event.target;
        console.log((target.id))
        if(target.id  == 0){
            ReactDOM.findDOMNode(this.Messages.current).scrollIntoView();
        }
        else if(target.id  == 1){
            ReactDOM.findDOMNode(this.PendingDocs.current).scrollIntoView();
        }
        else{
            ReactDOM.findDOMNode(this.BanPan.current).scrollIntoView();
        }
    }

      render() {
        return (
        <div className="WholeAdmin">
          <NavBar which={this.props.which} change={this.props.change}/>
              <div className ="FixedNav">
              <button className="NavButton" id = {0} onClick={this.GotoElement.bind(this)}> To Messages </button>
              <button className="NavButton" id = {1} onClick={this.GotoElement.bind(this)}> To Pending Doctors </button>
              <button className="NavButton" id = {2} onClick={this.GotoElement.bind(this)}> To Doctors / Users </button>
              </div>

              <RequestsList ref={this.Messages}></RequestsList>
              <h3 className="Head" ref={this.PendingDocs}>Pending Doctors</h3>
                <PendingDoctors></PendingDoctors>
              <BanPanel ref={this.BanPan}></BanPanel>
      </div>
    );
  }
}

export default AdminPage;
