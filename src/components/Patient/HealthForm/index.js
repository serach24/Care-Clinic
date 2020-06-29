import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import { styles } from './styles';
import { uid } from "react-uid";
import { Button } from "@material-ui/core";
const log = console.log;
class HealthForm extends React.Component {
    state = {
        ukey:0
    }

addProblem = healthform => {
    const problemList = healthform.state.patient.problems;

    const problem = {
        year: healthform.state.problemyear,
        reason: healthform.state.problemreason
    };

    problemList.push(problem);

    healthform.setState({
        problems: problemList
    });
};


render () {
    const { classes, patient, handleChange, handleSubmit } = this.props;
    return (
        <div className={classes.formroot}>
            <div className={classes.headerMain}><h1> <strong> Patient History </strong> </h1> </div>
            <div className={classes.header}><h2> Personal Information </h2> </div>
            <div>
            <TextField
                key={this.state.ukey++}
                label="Name"

                className={classes.textField}
                defaultValue={patient.name || ""}
                placeholder="placeholder"
                helperText="FirstName LastName"
                margin="dense"
                variant="outlined"
                onChange={handleChange}
            />
            <TextField
                key={this.state.ukey++}
                label="Date of Birth"

                className={classes.textField}
                helperText="Month/Day/Year"
                margin="dense"
                variant="outlined"
            />
            <TextField
                key={this.state.ukey++}
                label="Marital Status"

                className={classes.textField}
                helperText="Single / Married"
                margin="dense"
                variant="outlined"
            />
            </div>

            <div className={classes.header}><h2> Problems </h2> </div>
            {patient.problems.map(problem => (
            <div key={this.state.ukey++}>
           <TextField
                key={this.state.ukey++}
                label="Problem Year"

                className={classes.textField}
                placeholder={problem.year}
                helperText="Problem"
                margin="dense"
                variant="outlined"
            />
            <TextField
                key={this.state.ukey++}           
                label="Problem reason"

                className={classes.textFieldFull}
                placeholder={problem.reason}
                helperText="Problem"
                margin="dense"
                variant="outlined"
            />
            </div>
            ))}

            <div className={classes.header}><h2> Drugs </h2> </div>
            {patient.drugs.map(drug => (
            <div key={this.state.ukey++}>
           <TextField
                key={this.state.ukey++}
                label="Drug Name"

                className={classes.textField}
                helperText="Drug Name"
                margin="dense"
                variant="outlined"
            />
            <TextField
                key={this.state.ukey++}
                label="strength"

                className={classes.textField}
                helperText="the amount"
                margin="dense"
                variant="outlined"
            />
            <TextField
                key={this.state.ukey++}
                label="Frequency"

                className={classes.textField}
                helperText="pre day etc"
                margin="dense"
                variant="outlined"
            />
            </div>
            ))}

            <div className={classes.header}><h2> Allergies </h2> </div>
            {patient.allergies.map(allergie => (
            <div key={this.state.ukey++}>
            <TextField
                key={this.state.ukey++}
                label="allergie drugName"

                className={classes.textField}
                helperText="drugName"
                margin="dense"
                variant="outlined"
            />
            <TextField
                key={this.state.ukey++}
                label="reaction"

                className={classes.textFieldFull}
                helperText="reaction"
                margin="dense"
                variant="outlined"
            />
            </div>
            ))}
            <div className={classes.button}>
                <Button 
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                        className={classes.submitButton} >
                    Submit
                </Button>
            </div>
        </div>
    );
}

}

export default withStyles(styles, { withTheme: true })(HealthForm);