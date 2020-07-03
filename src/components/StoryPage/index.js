import React from "react";
import Typography from '@material-ui/core/Typography';
import { uid } from "react-uid";
import "./styles.css";
class StoryPage extends React.Component {


    render() {
        const { header, img, content } = this.props;
        return (
            <div className="storyContainer">
                {img != null && <div className="imageContainer">
                    <img src={img} alt="image" className="img" />
                </div>
                }
                <div>
                    <Typography variant="h3" gutterBottom> {header} </Typography>
                    {content.map(body => (
                        <Typography
                            key={uid(
                                body
                            )}
                            variant="body1" paragraph gutterBottom> {body} </Typography>
                    ))}
                </div>
            </div>
        );
    }



}

export default StoryPage;