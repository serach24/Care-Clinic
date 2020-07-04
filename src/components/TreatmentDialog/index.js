import React from "react";
import Dialog from "@material-ui/core/Dialog";

import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { styles } from "./styles";
import { DialogTitle } from "../DialogTitle";


class TreatmentDialog extends React.Component {

  state = {
    diagnosis: "",
    prescription: ""
  }

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  // componentDidMount(){
  //   this.setState({
  //     diagnosis: this.props.diagnosis,
  //     prescription: this.props.prescription, 
  //   })
  // }

  render() {
    const { id, classes, open, handleClose,returnTreatment, completeTreatment } = this.props;
    return (
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Treatment
        </DialogTitle>
        <MuiDialogContent dividers>
          <h3>Diagnostic Result</h3>
          <TextField
            name="diagnosis"
            value={this.state.diagnosis}
            onChange={this.handleInputChange}
            required
            className={classes.textInput}
            id="outlined-textarea"
            placeholder="Please type in your diagnostic result here"
            multiline
            variant="outlined"
          />
          <h3>Prescrpitions</h3>
          <TextField
            name="prescription"
            value={this.state.prescrpition}
            className={classes.textInput}
            onChange={this.handleInputChange}
            required
            id="outlined-textarea"
            placeholder="Please type in your prescription here"
            multiline
            variant="outlined"
          />
        </MuiDialogContent>
        <MuiDialogActions>
          <Button onClick={() => (returnTreatment(id, this.state.diagnosis, this.state.prescription))} color="primary">
            Ask Patient to come next time
          </Button>
          <Button onClick={() => (completeTreatment(id, this.state.diagnosis, this.state.prescription))} color="primary">
            Complete Treatment
          </Button>
        </MuiDialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: false })(TreatmentDialog);