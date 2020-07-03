import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";
import NavBar from "../../components/ui/NavBar";

/* Component for the Home page */

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email :'Please enter your email',
            message :'Please tell us the detail'
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
            alert(this.state.email + " want to send message '" + this.state.message +"' as feedback");
        }



      render() {
        return (
        <div className="Whole">
              <NavBar which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
            <div className="input_panel">
              <div className = "head_feedback" >
              FeedBack Form
            </div>
            <div className ="input_background">
            <textarea className="email" name="email" rows="3" cols="48" defaultValue = "Please enter your email" onChange = {this.handleInputChange}>

            </textarea>
            <textarea className="message" name="message" rows="20" cols="100" defaultValue = "Please tell us the detail" onChange = {this.handleInputChange}>

            </textarea>
            </div>
              <div className="FeedbackSubmitPanel">
              <button className="submitFeedback" onClick={this.FunctionSubmitFeedback.bind(this)}>
                    Submit
              </button>
              </div>
          </div>
      </div>
    );
  }
}

export default Feedback;
