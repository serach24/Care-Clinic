import React from "react";
import Typography from '@material-ui/core/Typography';
import "./styles.css";
class StoryPage extends React.Component {


    render() {
        const { article } = this.props;
        return (
            <div className="storyContainer">
                {article.img != null && <div className="imageContainer">
                    <img src={article.img} alt="" className="img" />
                </div>
                }
                <div>
                    <Typography variant="h3" gutterBottom> {article.title} </Typography>
                    {/* {article.content.map(body => ( */}
                        <Typography
                        style={{whiteSpace: 'pre-wrap'}}
                            variant="body1"  gutterBottom> {article.content} </Typography>
                    {/* ))} */}
                </div>
            </div>
        );
    }



}

export default StoryPage;