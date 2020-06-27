import React from "react"
import DoctorApplicationReview from "./DoctorApplicationReview"

class UserManagement extends React.Component{
  render(){
    return (
      <div>
        <h2 className="user-management-title">User Management</h2>
        <DoctorApplicationReview/>
      </div>
    );
  }
}

export default UserManagement;