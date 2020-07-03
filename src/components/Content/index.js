import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import "./styles.css";
import { styles } from './styles';


const log = console.log;

class Content extends React.Component {

    render () {
        const { classes, article } = this.props;
        return(
            <Card className= {classes.root}>
                {/* <Card Mediacomponent="img"/> */}

                <CardActionArea className= {classes.actionarea}>
                <div className={classes.MediaContainer}>
                <CardMedia  className={classes.cardmedia}
                            image={article.img}
                            title="img"
                            /> 
                </div>            
                <CardContent className={classes.contentarea}>

                    <Typography variant="h5">
                       <a href={article.link}>{article.header}</a>
                    </Typography>
                    {/* <Typography paragraph>
                        <a href="/story1">{article.content}</a>
                    </Typography> */}
                </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}
export default withStyles(styles, { withTheme: false })(Content);