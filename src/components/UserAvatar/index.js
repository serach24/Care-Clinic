import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import "./styles.css";
import ava from './static/icon.jpg'

/* Component for the Home page */

class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //State should be setted by call backend with Uid this.props.UUid
            name : 'Bo Liu lol',
            type: "not loged in",
        };
    }
      render() {
        return (
        <div>
              <svg className="Username">
              <defs>
              <path id='CurveName' d="M0,57 a1,1 0 0,0 133,0" />
              </defs>
              <text className= "UserName">
                <textPath xlinkHref='#CurveName' >
                    {"   Welcome !       " +this.state.name}
                </textPath>
              </text>
              </svg>
              <img className="UserHeadPic" src= {ava}></img>
          </div>
    );
  }
}

export default UserAvatar;
