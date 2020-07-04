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

import "./styles.css";
import { styles } from './styles';


const log = console.log;

class DoctorOpenInfo extends React.Component {
    state={appointment:false};
    submit(){
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
                    <div>{ doctor.expertise+"\n" +doctor.gender}</div>
                    </Typography>
                </CardContent>
            </CardActionArea>    
            <CardActions>
                    {/* {!this.state.appointment && <Button> Talk</Button>} */}
                    {!this.state.appointment && <Button onClick={()=>this.setState({appointment: true})}> Make Appointment</Button>}
                    {this.state.appointment && <Time submit={this.submit.bind(this)}/>}
            </CardActions>

            </Card>
        );
    }
}
export default withStyles(styles, { withTheme: false })(DoctorOpenInfo);
