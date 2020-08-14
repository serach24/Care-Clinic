import React from "react";
import "./styles.css";
import ProfilePanel from "./../../components/ProfilePanel"
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
