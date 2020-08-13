import React from "react";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { DialogTitle } from "../DialogTitle";

// import styles from "./styles"
import "./styles.css"

import io from 'socket.io-client'
// TODO might need to change this
const socket = io('ws://localhost:3000')

class Chat extends React.Component {
  state = {
    messages: [],
    input: "",
    tip: "",
  }

  componentDidMount() {
    socket.emit('on', { userId: this.props.userId, socketId: socket.id })
    socket.on('receiveMsg', (message) => {
      console.log(message)
      if (message) {
        this.setState({
          messages: [...this.state.messages, message]
        })
      }
    })
  }

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      tip: "",
      [target.name]: target.value
    });
  }

  sendMessage = () => {
    if (this.state.input === "") {
      this.setState({
        tip: "Input could not be empty"
      });
      return;
    }
    // locally add message
    const messages = this.state.messages
    const date = new Date()
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const message = {
      sender: this.props.userId,
      receiver: this.props.talkTo.userId,
      time,
      text: this.state.input
    }
    messages.push(message);
    this.setState({
      input: "",
      messages
    });

    // send to server
    socket.emit('sendMsg', message)
  }

  render() {
    const { open, onClose, talkTo } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          {talkTo.name}
        </DialogTitle>
        <Paper className="chat-component-wrapper">
          <ChatMessages
            userId={userId}
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
