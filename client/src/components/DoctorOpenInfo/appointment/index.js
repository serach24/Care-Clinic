import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class Time extends React.Component {
    render(){
    return (
        <form noValidate>
    <TextField
    id={this.props.doctorId + "time"}
    label="Next appointment"
    type="datetime-local"
    defaultValue="2020-08-19T10:30"
    InputLabelProps={{
        shrink: true,
    }}
    />
    <Button onClick={this.props.submit}>submit</Button>
    </form>

);}}
export default Time;
