import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCommentIcon from '@material-ui/icons/AddComment';
import IconButton from '@material-ui/core/IconButton';
import Comment from '../Comments';
import {postLike, delLike, postReply, getReply} from './request';


import "./styles.css";
import { styles } from './styles';

class Content extends React.Component {
    state= {
        commentStatus: false,
        likeStatus: false,
        comment:"",
        comments:[{}]
    }

    componentDidMount () {
        // console.log(this.props.app.state.userId);
        // console.log(this.props.article.likes);
        if (this.props.app.state.loginState !== 0){
            const uid = this.props.article.likes.find(id => id === this.props.app.state.userId)
            if(uid !== undefined){
                this.setState({
                    likeStatus: true
                })
            }
        }
        const abody = {articleId: this.props.article._id}
        // console.log(abody.articleId.length)
        if(abody.articleId.length > 0){
           getReply(this, abody) 
        }
        
    }

    handleReply = (event) =>{
        const time = new Date();
        const timestr = time.toDateString()
        const reqBody = {
            articleId: this.props.article._id,
            comment:{"img": "https://i.ibb.co/NS9X7M9/icon.jpg", 
                "userName": this.props.app.state.profile.username, 
                "userProfileLink": "/", 
                "commentTime": timestr,
                "comment": this.state.comment}}
        postReply(this, reqBody)
        // alert('A name was submitted: ' + this.state.comment);
        event.preventDefault();
    }
    handleValueChange = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

    handleClick = () => {
        // if(this.state.commentStatus)
        this.setState(prevState => ({
            commentStatus: !prevState.commentStatus
        }))
    }

    handleClickLike = () => {
        // console.log(this.props.app.state.loginState)
        if (this.props.app.state.loginState !== 0){
            if(this.state.likeStatus){
                // console.log(this.state.likeStatus)
                const reqBody = {}
                reqBody.articleId = this.props.article._id;
                reqBody.userId = this.props.app.state.userId
                delLike(this, reqBody)
            }
            if(!this.state.likeStatus){
                // console.log(this.state.likeStatus)
                const reqBody = {}
                reqBody.articleId = this.props.article._id;
                reqBody.userId = this.props.app.state.userId
                postLike(this, reqBody)
            }
        }else{
            console.log('need login')
        }
    }

    render() {
        const { classes, article, app } = this.props;
        // console.log(article);
        return (
            <Card className={classes.root}>
                {/* <Card Mediacomponent="img"/> */}
                <Link to={"/article/" + article._id}>
                    <CardActionArea className={classes.actionarea} >
                        <div className={classes.MediaContainer}>
                            <img className={classes.cardmedia} src={article.img} alt=""/>
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
                {this.state.commentStatus && <Comment loginState={app.state.loginState} comments={this.state.comments} onChange={this.handleValueChange} onClick={this.handleReply} comment={this.state.comment}/> }
            </Card>
        );
    }
}
export default withStyles(styles, { withTheme: false })(Content);