import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./styles.css";
const log = console.log;

class Content extends React.Component {

    render () {
        const { articles } = this.props;
        return(
            <div className= "article">
                <div className="block">
                <Typography variant="h5" noWrap>Phase 1 Handout Posted; Proposal Feedback on MarkUs; GitHub repos available;
                </Typography>
                <Typography paragraph>Hi everyone, a few things to announce: Proposal Feedback: Pr
                    oposal feedback can now be viewed on MarkUs. 
                   </Typography>
                <Button size="small" variant="contained" className="articleButton" > Like </Button>
                </div>
            </div>
        );
    }
}
export default Content;