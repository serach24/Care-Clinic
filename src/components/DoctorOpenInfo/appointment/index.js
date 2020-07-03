import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class Time extends React.Component {
    render(){
    return (
        <form noValidate>
    <TextField
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    InputLabelProps={{
        shrink: true,
    }}
    />
    <Button onClick={this.props.submit}>submit</Button>
    </form>

);}}
export default Time;
