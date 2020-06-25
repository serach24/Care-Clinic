import React from 'react';


import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import "./styles.css";

const log = console.log;

class Content extends React.Component {


    render () {
        const { articleheader, articlecontent } = this.props;
        return(
            <div className= "article">
                <div className="block">
                <Typography variant="h5" noWrap>{articleheader}
                </Typography>
                <Typography paragraph>{articlecontent} 
                   </Typography>
                <Button size="small" variant="contained" className="articleButton" > Like </Button>
                </div>
            </div>
        );
    }
}
export default Content;