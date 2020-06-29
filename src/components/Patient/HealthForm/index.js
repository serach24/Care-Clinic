import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import { styles } from './styles';
import { uid } from "react-uid";
import { Button } from "@material-ui/core";
const log = console.log;
class HealthForm extends React.Component {

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
            <div className={classes.header}><h2> Personal Information </h2> </div>
            <div>
            <TextField
                label="Name"
                id="outlined-margin-dense"
                className={classes.textField}
                defaultValue={patient.name || ""}
                placeholder="placeholder"
                helperText="FirstName LastName"
                margin="dense"
                variant="outlined"
                onChange={handleChange}
            />
            <TextField
                label="Date of Birth"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Month/Day/Year"
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="Marital Status"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Single / Married"
                margin="dense"
                variant="outlined"
            />
            </div>

            <div className={classes.header}><h2> Problems </h2> </div>
            {patient.problems.map(problem => (
            <div>
           <TextField
                // key={uid(
                //     problem
                // )}
                label="Problem Year"
                id="outlined-margin-dense"
                className={classes.textField}
                placeholder={problem.year}
                helperText="Problem"
                margin="dense"
                variant="outlined"
            />
            <TextField
                // key={uid(
                //     problem
                // )}            
                label="Problem reason"
                id="outlined-margin-dense"
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
            <div>
           <TextField
                // key={uid(
                //     drug
                // )}
                label="Drug Name"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Drug Name"
                margin="dense"
                variant="outlined"
            />
            <TextField
                // key={uid(
                //     drug
                // )}
                label="strength"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="the amount"
                margin="dense"
                variant="outlined"
            />
            <TextField
                // key={uid(
                //     drug
                // )}
                label="Frequency"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="pre day etc"
                margin="dense"
                variant="outlined"
            />
            </div>
            ))}

            <div className={classes.header}><h2> Allergies </h2> </div>
            {patient.allergies.map(allergie => (
            <div>
            <TextField
                // key={uid(
                //     allergie
                // )}
                label="allergie drugName"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="drugName"
                margin="dense"
                variant="outlined"
            />
            <TextField
                // key={uid(
                //     allergie
                // )}
                label="reaction"
                id="outlined-margin-dense"
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