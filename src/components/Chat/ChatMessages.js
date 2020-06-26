import React from "react";
import List from "@material-ui/core/List";
import Message from "./Message";

// import {Styles} from "./styles"
import "./styles.css"
/* Component for the Student Form */
class ChatMessages extends React.Component {

  render() {
    const { messages } = this.props;
    // const classes = Styles();
    return (
      <div>
        <List className="chat-messages">
          {messages.map(message => (
            <Message
              message={message}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default ChatMessages;
