import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import "./styles.css";

const log = console.log;

class Content extends React.Component {


    render () {
        const { articleheader, articlecontent } = this.props;
        return(
            <Card className= "article">
                {/* <Card Mediacomponent="img"/> */}
                <CardActionArea>
                <CardContent>
                <Typography variant="h5" noWrap>{articleheader}
                </Typography>
                <Typography paragraph>{articlecontent} 
                   </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" variant="contained" className="articleButton" > Like </Button>
                </CardActions>
                
            </Card>
        );
    }
}
export default Content;