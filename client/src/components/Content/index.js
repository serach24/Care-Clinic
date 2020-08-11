import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCommentIcon from '@material-ui/icons/AddComment';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import "./styles.css";
import { styles } from './styles';


const log = console.log;

class Content extends React.Component {

    render() {
        const { classes, article } = this.props;
        // console.log(article);
        return (
            <Card className={classes.root}>
                {/* <Card Mediacomponent="img"/> */}
                <Link to={"/article/" + article._id}>
                <CardActionArea className={classes.actionarea} >
                    <div className={classes.MediaContainer}>
                        <CardMedia className={classes.cardmedia}
                            image={article.img}
                            title="img"
                        />
                    </div>
                    <CardContent className={classes.contentarea}>

                        <Typography variant="h5">
                            {article.title}
                        </Typography>
                        {/* <Typography paragraph>
                        <a href="/story1">{article.content}</a>
                    </Typography> */}
                    </CardContent>
                </CardActionArea>
                </Link>
                <CardActions className={classes.CardActions}>
                    <div className="icon">
                    <IconButton aria-label="Like">
                        <FavoriteIcon color="secondary" />
                    </IconButton>
                    <IconButton aria-label="Comment">
                        <AddCommentIcon />
                    </IconButton>
                    </div>
                </CardActions>
            </Card>
        );
    }
}
export default withStyles(styles, { withTheme: false })(Content);