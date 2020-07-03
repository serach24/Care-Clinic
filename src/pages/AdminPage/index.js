import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';

import "./styles.css";

/* Component for the Home page */
import UserManagement from "../../components/Admin/UserManagement";
import ContentManagement from "../../components/Admin/ContentManagement";
import FeedbackReview from "../../components/Admin/FeedbackReview";

import NavBar from "../../components/ui/NavBar";
import AdminSideBar from "../../components/Admin/AdminSideBar";


class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.feedback= React.createRef();
    this.user = React.createRef();
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

  GotoElement(index) {
    if (index == 0) {
      ReactDOM.findDOMNode(this.user.current).scrollIntoView();
    }
    else if (index == 1) {
      ReactDOM.findDOMNode(this.feedback.current).scrollIntoView();
    }
    else {
      ReactDOM.findDOMNode(this.content.current).scrollIntoView();
    }
  }


  render() {
    return (
      <div className="admin-page-wrapper">
        <NavBar which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
        <AdminSideBar GoTo={this.GotoElement.bind(this)}/>
        <div className="admin-page-content">
          <UserManagement ref={this.user} id="user-management"/>
          <ContentManagement ref={this.content} id="content-management"/>
          <FeedbackReview ref={this.feedback} id="feedback-review"/>
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
