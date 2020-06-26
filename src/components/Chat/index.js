import React from "react";

import Paper from "@material-ui/core/Paper";

import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";


// import styles from "./styles"
import "./styles.css"

/* Component for the Student Form */
class Chat extends React.Component {
  state = {
    // only for phase 1 sample display, in the final version 
    // the time would be from the server
    curTime: "2020-06-11 00:12:13", 
    messages: [
      {
        user: "testUser",
        time: "2020-06-10 23:46:24",
        text: "Hello!"
      }
    ],
    input: ""
  }

  handleChange= (e) =>{
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  sendMessage = () =>{
    if (this.state.input===""){
      console.log("Input could not be empty");
      return;
    }
    const messages = this.state.messages
    const message = {
      user: "",
      time: this.state.curTime,
      text: this.state.input
    }
    messages.push(message);
    this.setState({
      input: "",
      messages
    });
    console.log(messages);
  }

  render() {
    const {classes} = this.props;
    return (
      <Paper className="chat-component-wrapper">
        <ChatMessages
          messages={this.state.messages}
        />
        <ChatInput 
          input={this.state.input}
          handleChange={this.handleChange}
          sendMessage={this.sendMessage}
        />
      </Paper>
    );
  }
}

export default Chat;
// export default withStyles(styles)(Chat);
