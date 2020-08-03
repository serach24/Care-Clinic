import React from "react";

import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";

import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

import { DialogTitle } from "../DialogTitle";

// import styles from "./styles"
import "./styles.css"

class Chat extends React.Component {
  state = {
    // only for phase 1 sample display, in the final version 
    // the time would be from the server
    curTime: "2020-06-11 00:12:13", 

    // the data below need a serverCall to get
    messages: [
      {
        user: "testUser",
        time: "2020-06-10 23:46:24",
        text: "Hello!"
      }
    ],
    input: "",
    tip: "",
  }

  handleChange= (e) =>{
    const target = e.target;
    this.setState({
      tip: "",
      [target.name]: target.value
    });
  }

  sendMessage = () =>{
    if (this.state.input===""){
      this.setState({
        tip: "Input could not be empty"
      });
      console.log("Input could not be empty")
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
  }

  render() {
    const {open, onClose} = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          testUser
        </DialogTitle>
      <Paper className="chat-component-wrapper">
        <ChatMessages
          messages={this.state.messages}
        />
        <ChatInput 
          tip={this.state.tip}
          input={this.state.input}
          handleChange={this.handleChange}
          sendMessage={this.sendMessage}
        />
      </Paper>
      </Dialog>
    );
  }
}

export default Chat;
// export default withStyles(styles)(Chat);
