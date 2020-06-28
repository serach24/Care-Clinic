import React from "react";
import Typography from '@material-ui/core/Typography';
import { uid } from "react-uid";
import "./styles.css";
class StoryPage extends React.Component {


    render () {
        const { header, content} = this.props;
        return(
        <div className="storyContainer">
            <Typography variant="h3" gutterBottom> {header} </Typography>
            {content.map(body => (
            <Typography 
                key={uid(
                body
                )} 
              variant="body1" paragraph gutterBottom> {body} </Typography> 
          ))}
            
        </div>
        );
    }



}

export default StoryPage;