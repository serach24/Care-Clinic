import React from "react";
import { uid } from "react-uid";
import Content from "./../Content";
import Container from '@material-ui/core/Container';
import "./styles.css";

class ContentList extends React.Component {


render() {
    const { articles } = this.props;
    return (
        <div className="article_container">
          <Container >
            {articles.map(article => (
            <Content 
            key={uid(
                article
              )}
            article={article}
            />
          ))}
          </Container>
        </div>
    );
    }
}

export default ContentList;