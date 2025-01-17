import React from "react";
import "./styles.css";
import ava from './static/icon.jpg'

/* Component for the Home page */

class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //State should be setted by call backend with Uid this.props.UUid
            // the data below need a serverCall to get
            name : 'Bo Liu lol',
            type: "not loged in",
        };
    }
      render() {
        const {app} = this.props
        return (
        <div>
              <svg className="Username">
              <defs>
              <path id='CurveName' d="M0,57 a1,1 0 0,0 133,0" />
              </defs>
              <text className= "UserName">
                <textPath xlinkHref='#CurveName' >
                    {"   Welcome !       " +app.state.profile.realName}
                </textPath>
              </text>
              </svg>
              <img className="UserHeadPic" src= {ava} alt=""></img>
          </div>
    );
  }
}

export default UserAvatar;
