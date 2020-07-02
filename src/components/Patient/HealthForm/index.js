import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Formik, Field, Form, FieldArray } from "formik";


import { styles } from './styles';
import { uid } from "react-uid";
import { Button, Checkbox, Radio } from "@material-ui/core";
const log = console.log;
class HealthForm extends React.Component {
    state = {
        ukey:0,

    }

render () {
    const { classes, patient, onSubmit, isSubmit} = this.props;
    return (
        <div className={classes.formroot}>
            <div className={classes.headerMain}><h1> <strong> Patient History </strong> </h1> </div>
            <div className={classes.header}><h2> Personal Information </h2> </div>
            <Formik 
                initialValues= {patient}
                onSubmit={(data, {setSubmitting}) => {
                    setSubmitting(true);
                    console.log(data);
                    setSubmitting(false);
                }}
                >
            {({ values, handleChange, handleBlur}) => (
                <Form>
                    <div>
                        <TextField
                            name = "firstName"
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
                            name = "lastName"
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
                            <Button onClick={() => 
                                        arrayHelper.push ({ 
                                            year:"",  
                                            reason:"",
                                            ukey: this.state.ukey++
                                        })
                                    }
                                    variant="contained"
                                    // color="secondary"
                                    // className={classes.submitButton}
                            >
                                Add
                            </Button>
                        {values.problems.map((problem, index) => (
                            <div key={problem.ukey}>
                                <TextField
                                        name={`problems.${index}.year`}
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
                                        name={`problems.${index}.reason`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Problem reason"
                                        className={classes.textFieldFull}
                                        placeholder={problem.reason}
                                        helperText="Problem"
                                        margin="dense"
                                        variant="outlined"
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
                            <Button onClick={() => 
                                        arrayHelper.push ({ 
                                            name:"",  
                                            strength:"", 
                                            frequency: "", 
                                            ukey: this.state.ukey++
                                        })
                                    }
                                    variant="contained"
                            >
                                Add
                            </Button>
                    
                        {values.drugs.map((drug,index) => (
                                <div key={drug.ukey}>
                                        <TextField
                                            name={`drugs.${index}.name`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            label="Drug Name"
                                            className={classes.textField}
                                            helperText="Drug Name"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <TextField
                                            name={`drugs.${index}.strength`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            label="strength"
                                            className={classes.textField}
                                            helperText="the amount"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <TextField
                                            name={`drugs.${index}.frequency`}
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
                            <Button onClick={() => 
                                    arrayHelper.push ({ 
                                        drugName:"",  
                                        reaction:"", 
                                        ukey: this.state.ukey++
                                    })
                                    }
                                    variant="contained"
                            >
                                Add
                            </Button>
                        {values.allergies.map((allergie,index) => (
                            <div key={allergie.ukey}>
                                <TextField
                                    name={`allergies.${index}.drugName`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="allergie drugName"
                                    className={classes.textField}
                                    helperText="drugName"
                                    margin="dense"
                                    variant="outlined"
                                />
                                <TextField
                                    name={`allergies.${index}.reaction`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="reaction"
                                    className={classes.textFieldFull}
                                    helperText="reaction"
                                    margin="dense"
                                    variant="outlined"
                                />
                            </div>
                        ))}
                        </div>
                    )}
                </FieldArray>


                    <div className={classes.button}>
                        <Button 
                                disabled={isSubmit}
                                onClick= {() => onSubmit(values)
                                        }
                                type="button"
                                variant="contained"
                        >
                            Submit
                        </Button>
                    </div>

                <pre>
                    {JSON.stringify(values, null, 2)}
                </pre>

                </Form>
            )}
            </Formik>
        </div>
    );
}

}

export default withStyles(styles, { withTheme: true })(HealthForm);