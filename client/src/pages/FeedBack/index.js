import React from "react";
import "./styles.css";

import { Addfeed } from './request';

import { TextField, Button, Container } from "@material-ui/core";
/* Component for the Home page */

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  FunctionSubmitFeedback() {
    Addfeed(this.state)
    alert(this.state.email + " want to send message '" + this.state.message + "' as feedback");
  }

  render() {
    return (
      <Container className="feedback" component="main" maxWidth="xs">
        <h2>FeedBack Form</h2>
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          autoFocus
          className="email"
          name="email"
          label="Please enter your email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />

        <TextField
          margin="normal"
          fullWidth
          multiline
          rows={4}
          required
          variant="outlined"
          className="message"
          name="message"
          label="Please write your feedback here"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <div className="feedbackButton">
          <Button
            color="primary"
            variant="contained"
            onClick={this.FunctionSubmitFeedback.bind(this)}
          >
            Submit
        </Button>
        </div>
      </Container>
    );
  }
}

export default Feedback;
