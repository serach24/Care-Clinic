import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Formik, Form, FieldArray } from "formik";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


import { styles } from './styles';
import "./styles.css";
import { Button} from "@material-ui/core";
class HealthForm extends React.Component {
    state = {
        ukey: 0,
    }
    render() {
        const { classes, patient, onSubmit, isSubmit, edit } = this.props;
        return (
            <div className={classes.formroot}>
                <div className={classes.headerMain}><h1> <strong> Patient History {patient.firstName}</strong> </h1> </div>
                <FormControlLabel
                    control={<Switch checked={!isSubmit} onChange={edit} name="Edit" />}
                    label="Edit health history"
                />
                <div className={classes.header}><h2> Personal Information </h2> </div>
                <Formik
                    enableReinitialize
                    initialValues={patient}
                    onSubmit={(data, { setSubmitting }) => {
                        setSubmitting(true);
                        console.log(data);
                        setSubmitting(false);
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form>
                            <div>
                                <TextField
                                    disabled={isSubmit}
                                    name="firstName"
                                    value={values.firstName || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="First Name"
                                    placeholder="placeholder"
                                    helperText="FirstName"
                                    margin="dense"
                                    variant="outlined"
                                    className={classes.textField}
                                />
                                <TextField
                                    disabled={isSubmit}
                                    name="lastName"
                                    value={values.lastName || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Last Name"
                                    placeholder="placeholder"
                                    helperText="LastName"
                                    margin="dense"
                                    variant="outlined"
                                    className={classes.textField}
                                />
                                <TextField
                                    disabled={isSubmit}
                                    name="DOB"
                                    value={values.DOB || ""}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Date of Birth"
                                    className={classes.textField}
                                    helperText="Month/Day/Year"
                                    margin="dense"
                                    variant="outlined"
                                />
                                <TextField
                                    disabled={isSubmit}
                                    name="maritalStatus"
                                    value={values.maritalStatus}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Marital Status"
                                    className={classes.textField}
                                    helperText="Single / Married"
                                    margin="dense"
                                    variant="outlined"
                                />
                            </div>

                            <div className={classes.header}><h2> Problems </h2> </div>
                            <FieldArray name="problems">
                                {(arrayHelper) => (
                                    <div>
                                        <Button disabled={isSubmit}
                                            onClick={() =>
                                                arrayHelper.push({
                                                    year: "",
                                                    reason: ""
                                                })
                                            }
                                            variant="contained"
                                            // color="secondary"
                                            className={classes.addButton}
                                        >
                                            Add
                            </Button>
                                        {values.problems.map((problem, index) => (
                                            <div key={index}>
                                                <TextField
                                                    disabled={isSubmit}
                                                    name={`problems.${index}.year`}
                                                    value={problem.year || ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="Problem Year"
                                                    className={classes.textField}
                                                    placeholder={problem.year}
                                                    helperText="Problem"
                                                    margin="dense"
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    disabled={isSubmit}
                                                    name={`problems.${index}.reason`}
                                                    value={problem.reason || ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="Problem reason"
                                                    className={classes.textFieldFull}
                                                    placeholder={problem.reason}
                                                    helperText="Problem"
                                                    margin="dense"
                                                    variant="outlined"
                                                    multiline
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </FieldArray>

                            <div className={classes.header}><h2> Drugs </h2> </div>
                            <FieldArray name="drugs">
                                {(arrayHelper) => (
                                    <div>
                                        <div>
                                            <Button disabled={isSubmit}
                                                onClick={() =>
                                                    arrayHelper.push({
                                                        name: "",
                                                        strength: "",
                                                        frequency: ""
                                                    })
                                                }
                                                variant="contained"
                                                className={classes.addButton}
                                            >
                                                Add
                            </Button>
                                        </div>
                                        {values.drugs.map((drug, index) => (
                                            <div key={100+index}>
                                                <TextField
                                                    disabled={isSubmit}
                                                    name={`drugs.${index}.name`}
                                                    value={drug.name || ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="Drug Name"
                                                    className={classes.textField}
                                                    helperText="Drug Name"
                                                    margin="dense"
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    disabled={isSubmit}
                                                    name={`drugs.${index}.strength`}
                                                    value={drug.strength || ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="strength"
                                                    className={classes.textField}
                                                    helperText="the amount"
                                                    margin="dense"
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    disabled={isSubmit}
                                                    name={`drugs.${index}.frequency`}
                                                    value={drug.frequency || ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="Frequency"
                                                    className={classes.textField}
                                                    helperText="pre day etc"
                                                    margin="dense"
                                                    variant="outlined"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </FieldArray>

                            <div className={classes.header}><h2> Allergies </h2> </div>
                            <FieldArray name="allergies">
                                {(arrayHelper) => (
                                    <div>
                                        <Button disabled={isSubmit}
                                            onClick={() =>
                                                arrayHelper.push({
                                                    drugName: "",
                                                    reaction: ""
                                                })
                                            }
                                            variant="contained"
                                            className={classes.addButton}
                                        >
                                            Add
                            </Button>
                                        {values.allergies.map((allergie, index) => (
                                            <div key={200+index}>
                                                <TextField
                                                    disabled={isSubmit}
                                                    name={`allergies.${index}.drugName`}
                                                    value={allergie.drugName || ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="allergie drugName"
                                                    className={classes.textField}
                                                    helperText="drugName"
                                                    margin="dense"
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    disabled={isSubmit}
                                                    name={`allergies.${index}.reaction`}
                                                    value={allergie.reaction || ""}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="reaction"
                                                    className={classes.textFieldFull}
                                                    helperText="reaction"
                                                    margin="dense"
                                                    variant="outlined"
                                                    multiline
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </FieldArray>


                            <div className={classes.button}>
                                <Button
                                    disabled={isSubmit}
                                    onClick={() => onSubmit(values)
                                    }
                                    type="button"
                                    variant="contained"
                                    className={classes.submitButton}
                                >
                                    Submit
                        </Button>
                            </div>

                            {/* <pre>
                    {JSON.stringify(values, null, 2)}
                </pre> */}

                        </Form>
                    )}
                </Formik>
            </div>
        );
    }

}

export default withStyles(styles, { withTheme: true })(HealthForm);