import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { styles } from './styles';



class RightPart extends React.Component {
    render () {
        const { classes } = this.props;
        return (
            <div className={classes.rightroot}>
                <div className={classes.buttoncard}>
                    <Button variant = "outlined"
                            color = "secondary"
                            size = "medium" className={classes.button}> Button 1 </Button>
                    <Button variant = "outlined"
                            color = "secondary"
                            size = "medium" className={classes.button}> Button 1 </Button>
                    <Button variant = "outlined"
                            color = "secondary"
                            size = "medium" className={classes.button}> Button 1 </Button>
                    <Button variant = "outlined"
                            color = "secondary"
                            size = "medium" className={classes.button}> Button 1 </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: false })(RightPart);