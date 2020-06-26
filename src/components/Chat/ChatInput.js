import React from "react";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

import "./styles.css"
/* Component for the Student Form */
class ChatInput extends React.Component {

  render() {
    const { input, handleChange, sendMessage } = this.props;
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
        />
        <Button
          className="chat-input-send-button"
          variant="contained"
          color="primary"
          id="chat-send-button"
          onClick={sendMessage}
          // onKeyDown={(e)=>{(e->keyCode===13) ? sendMessage().bind(this) : undefined}}
        >
          Send
        </Button>

      </div>
    );
  }
}

export default ChatInput;
