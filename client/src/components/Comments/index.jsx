import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Divider from '@material-ui/core/Divider';
import {useStyles} from './styles';


// const articleComment = {
//     img: 'https://cdn.v2ex.com/gravatar/c3bbff99748d633f9016611eb5bdf4fc?s=48&d=retro',
//     userName: 'Mike',
//     userProfileLink: '/',
//     commentTime: 'Jan 1 2019',
//     comment: "This is a test case for comment feature"
// };


function AddComment(props) {
    return (
                // <div className={classes.field}>
                //     <TextareaAutosize onChange={props.onChange} className={classes.textArea}>
                //     </TextareaAutosize>
                //     <Button onClick={props.onClick} variant="contained" className={classes.replyButton} disableRipple>
                //         reply
                //     </Button>
                // </div>
                <form onSubmit={props.onClick}>
                    <label>
                        Comment:
                        <input type="text" value={props.comment} onChange={props.onChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
    )
}

function Comment(props) {
    const classes = useStyles();
    return (
        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td width="48" valign="top" align="center">
                        <img src={props.img} className={classes.avatar} border="0" align="default" alt={props.userName} />
                    </td>
                    <td width="10" valign="top">
                    </td>
                    <td width="auto" valign="top" align="left">
                        <div className={classes.floor}>
                            &nbsp; &nbsp;
                            <span className={classes.num}>{props.index + 1}</span>
                        </div>
                        <div className={classes.divid3}>

                        </div>
                        <strong>
                            <a href={props.userProfileLink} className="dark">{props.userName}</a>
                        </strong>
                                &nbsp; &nbsp;
                                <span className={classes.dateTime}>{props.commentTime}</span>
                        <div className={classes.divid5}></div>
                        <div className={classes.replyContent}>{props.comment}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

function CommentContainer(props) {
    const classes = useStyles();
    // console.log(props.comments);
    // const aComments = [
    //     {
    //         _id: '123123',
    //         img: 'https://i.ibb.co/cCCf9dF/316703-normal.png',
    //         userName: 'Jack',
    //         userProfileLink: '/',
    //         commentTime: 'Jan 1 2019',
    //         comment: "This is a test case for comment feature"
    //     },
    //     {
    //         _id: '123124',
    //         img: 'https://i.ibb.co/cCCf9dF/316703-normal.png',
    //         userName: 'Zoe',
    //         userProfileLink: '/',
    //         commentTime: 'Jan 2 2019',
    //         comment: "This is a test case for comment feature"
    //     },
    //     {
    //         _id: '123125',
    //         img: 'https://i.ibb.co/cCCf9dF/316703-normal.png',
    //         userName: 'Ken',
    //         userProfileLink: '/',
    //         commentTime: 'Jan 3 2019',
    //         comment: "This is a test case for comment feature"
    //     },
    //     {
    //         _id: '123126',
    //         img: 'https://i.ibb.co/cCCf9dF/316703-normal.png',
    //         userName: 'Alex',
    //         userProfileLink: '/',
    //         commentTime: 'Jan 4 2019',
    //         comment: "This is a test case for comment feature"
    //     },
    // ]


    return (
        <div>
            <Divider />
            {props.comments.map((element, index) => (
                <div key={index} id={element._id} className={classes.cell}>
                    <Comment img={element.img} userName={element.userName} userProfileLink={element.userProfileLink} commentTime={element.commentTime} comment={element.comment} index={index} />
                </div>
            ))
            }
            {/* {props.loginState !== 0 && <AddComment onChange={props.onChange} onClick={props.onClick} comment={props.comment}/>} */}
            <AddComment onChange={props.onChange} onClick={props.onClick} comment={props.comment}/>
        </div>
    );
}



export default CommentContainer;