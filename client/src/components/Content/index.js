import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCommentIcon from '@material-ui/icons/AddComment';
import IconButton from '@material-ui/core/IconButton';
import Comment from '../Comments';


import "./styles.css";
import { styles } from './styles';

class Content extends React.Component {
    state= {
        commentStatus: false,
        likeStatus: false
    }
    handleClick = () => {
        // getComments(this);
        this.setState(prevState => ({
            commentStatus: !prevState.commentStatus
        }),() => console.log(this.state.commentStatus))
    }

    handleClickLike = () => {
        this.setState(prevState => ({
            likeStatus: !prevState.likeStatus
        }),() => console.log(this.state.likeStatus))
    }

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
                        <IconButton onClick={this.handleClickLike} aria-label="Like">
                            {this.state.likeStatus ? <FavoriteIcon color="secondary" /> : <FavoriteIcon/>}
                        </IconButton>
                        <IconButton onClick={this.handleClick} aria-label="Comment">
                            <AddCommentIcon />
                        </IconButton>
                    </div>
                </CardActions>
                {console.log(article.comments)}
                {this.state.commentStatus && <Comment comments={article.comments}/> }
            </Card>
        );
    }
}
export default withStyles(styles, { withTheme: false })(Content);