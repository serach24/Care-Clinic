import React from "react";
import { uid } from "react-uid";
import Content from "./../Content";
import Container from '@material-ui/core/Container';
import "./styles.css";

class ContentList extends React.Component {


render() {
    const { articles } = this.props;
    return (
        <div >
          <Container >
            {articles.map(article => (
            <Content 
            key={uid(
                article
              )}
            articleheader={article.header} 
            articlecontent={article.content} 
            />
          ))}
          </Container>
        </div>
    );
    }
}

export default ContentList;