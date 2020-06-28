import React from "react"
import DoctorApplicationReview from "./DoctorApplicationReview"
import UserBan from "./UserBan"

class UserManagement extends React.Component{
  render(){
    return (
      <div>
        <h2 className="user-management-title">User Management</h2>
        <DoctorApplicationReview/>
        <UserBan/>
      </div>
    );
  }
}

export default UserManagement;