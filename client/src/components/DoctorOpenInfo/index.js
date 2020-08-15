import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Time from './appointment';
import {Apporequest} from './request'

import { TextField} from "@material-ui/core";

import "./styles.css";
import { styles } from './styles';

class DoctorOpenInfo extends React.Component {
    state={appointment:false,
            dis:"",    
    };


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }

    submit(){
        const body = {
            dis: this.state.dis,
            real: this.props.Rname,
            name: this.props.Uname,
            from : this.props.UUid,
            to : this.props.doctor.id,
            time : document.getElementById(this.props.doctor.id +"time").value
        };

        console.log("make a appointment by "+this.props.UUid +" to "
         +this.props.doctor.id +" at " +document.getElementById(this.props.doctor.id +"time").value)

        Apporequest(body);
        //talk with backend
        this.setState({appointment:false});
    }


    render () {
        const { classes, doctor } = this.props;
        return(
            <Card className= {classes.root}>
                {/* <Card Mediacomponent="img"/> */}

                <CardActionArea className= {classes.actionarea}>
                <div className={classes.MediaContainer}>
                <CardMedia  className={classes.cardmedia}
                            image={doctor.img}
                            title="img"
                            /> 
                </div>
                <CardContent className={classes.contentarea}>
                    <Typography variant="h5">
                    <div>{doctor.realName+"\n"}</div>
                    </Typography>
                    <Typography variant="h5" color="textSecondary">
                    <div>{doctor.gender}</div>
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                    {doctor.expertise.map(ex => (
                        ex+" "
                    ))}
                    </Typography>
                </CardContent>
            </CardActionArea>    
            <CardActions>
                    {/* {!this.state.appointment && <Button> Talk</Button>} */}
                    {!this.state.appointment && <Button onClick={()=>this.setState({appointment: true})}> Make Appointment</Button>}
                    {this.state.appointment && <Time submit={this.submit.bind(this)} doctorId={doctor.id} />}
                    {this.state.appointment &&         
                        <TextField
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        className="dis"
                        name="dis"
                        label="Please enter detail"
                        value={this.state.dis}
                        onChange={this.handleInputChange}
                        />}
            </CardActions>

            </Card>
        );
    }
}
export default withStyles(styles, { withTheme: false })(DoctorOpenInfo);
