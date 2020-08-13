import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography"

class Message extends React.Component {


  render() {
    const { message, userId } = this.props;

    return (
      <div>
        {message.sender === userId
          // message the current user sent
          ? <ListItem className="chat-self-message" alignItems="flex-start">
            <Avatar className="chat-self-avatar" alt="currentUser" src="" />
            <div className="chat-self-text-wrapper">
              <span className="chat-self-text">
                {message.text}
              </span>
            </div>
          </ListItem>
          : <ListItem alignItems="flex-start">
            <Avatar className="chat-other-avatar" alt="testUser" src="" />
            <div className="chat-other-text-wrapper">
              <span className="chat-other-text">
                {message.text}
              </span>
            </div>
          </ListItem>
        }
      </div>
    );
  }
}

export default Message;