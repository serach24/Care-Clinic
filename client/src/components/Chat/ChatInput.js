import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./styles.css"

class ChatInput extends React.Component {

  onKeyDown = (event, func) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      func();
    }
  }

  render() {
    const { input, handleChange, sendMessage, tip } = this.props;
    return (
      <div className="chat-input-component">
        <TextField
          fullWidth
          multiline
          variant="outlined"
          rows={4}
          className="chat-input"
          onChange={handleChange}
          name="input"
          value={input}
          autoFocus
          onKeyDown={(e)=>(this.onKeyDown(e,sendMessage))}
        />
        <div className="chat-tip">{tip}</div>
        <Button
          className="chat-input-send-button"
          variant="contained"
          color="primary"
          id="chat-send-button"
          onClick={sendMessage}
          // onKeyDown={(e)=>{(e->keyCode===13) ? sendMessage: undefined}}
        >
          Send
        </Button>

      </div>
    );
  }
}

export default ChatInput;
