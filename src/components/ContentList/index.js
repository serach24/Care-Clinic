import React from "react";
import { uid } from "react-uid";
import Content from "./../Content";

import "./styles.css";

class ContentList extends React.Component {


render() {
    const { articles } = this.props;
    return (
        <div >
            {articles.map(article => (
            <Content 
            key={uid(
                article
              )}
            articleheader={article.header} 
            articlecontent={article.content} 
            />
          ))}

        </div>
    );
    }
}

export default ContentList;