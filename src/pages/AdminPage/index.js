import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';

import "./styles.css";

/* Component for the Home page */
import UserManagement from "../../components/Admin/UserManagement";
import ContentManagement from "../../components/Admin/ContentManagement";
import FeedbackReview from "../../components/Admin/FeedbackReview";

import RequestsList from '../../components/Admin/RequestsAdmin'
import BanPanel from '../../components/Admin/AdminBanPanel'
import PendingDoctors from '../../components/Admin/PendingDoctorInformationAdmin';
import NavBar from "../../components/ui/NavBar";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import Feedback from "../FeedBack";


class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.Messages = React.createRef();
    this.PendingDocs = React.createRef();
    this.BanPan = React.createRef();
    // this.isSideBarOpen = false;
  }

  //   openSideBar = (e) => {
  //   if (!this.state.isSideBarOpen){
  //   this.setState({
  //     isSideBarOpen: true,
  //   })}
  //   else{
  //     this.setState({
  //       isSideBarOpen: false,
  //     })
  //   }
  // }

  GotoElement(event) {
    const target = event.target;
    console.log((target.id))
    if (target.id == 0) {
      ReactDOM.findDOMNode(this.Messages.current).scrollIntoView();
    }
    else if (target.id == 1) {
      ReactDOM.findDOMNode(this.PendingDocs.current).scrollIntoView();
    }
    else {
      ReactDOM.findDOMNode(this.BanPan.current).scrollIntoView();
    }
  }


  render() {
    return (
      <div className="admin-page-wrapper">
        <NavBar which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
        <AdminSideBar />
        <div className="admin-page-content">
          <UserManagement />
          <ContentManagement />
          <FeedbackReview />
        </div>
        {/* <RequestsList ref={this.Messages}></RequestsList>
              <h3 className="Head" ref={this.PendingDocs}>Pending Doctors</h3>
                <PendingDoctors></PendingDoctors>
              <BanPanel ref={this.BanPan}></BanPanel> */}
      </div>
    );
  }
}

export default AdminPage;
