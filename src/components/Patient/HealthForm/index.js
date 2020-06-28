import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import { styles } from './styles';
class HealthForm extends React.Component {

render () {
    const { classes, patient } = this.props;
    return (
        <div className={classes.formroot}>
            <div>
            <TextField
                label="Name"
                id="outlined-margin-dense"
                className={classes.textField}
                placeholder="placeholder"
                helperText="FirstName LastName"
                margin="dense"
                variant="outlined"
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
            <div>
           <TextField
                label="Problem Year"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Problem"
                fullWidth
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="Problem reason"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Problem"
                margin="dense"
                variant="outlined"
            />
            </div>
            <div>
           <TextField
                label="Drug Name"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="Drug Name"
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="strength"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="the amount"
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="Frequency"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="pre day etc"
                margin="dense"
                variant="outlined"
            />
            </div>
            <div>
            <TextField
                label="allergie drugName"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="drugName"
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="reaction"
                id="outlined-margin-dense"
                className={classes.textField}
                helperText="reaction"
                margin="dense"
                variant="outlined"
            />
            </div>
        </div>
    );
}

}

export default withStyles(styles, { withTheme: true })(HealthForm);