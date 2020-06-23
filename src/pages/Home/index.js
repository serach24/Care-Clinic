import React from "react";

//importing components
import Content from "../../components/Content";
import NavBar from "../../components/ui/NavBar";

import "./styles.css";

class Home extends React.Component{
    state = {
        articleheader: "Header",
        articlecontent: "Content",
        articles :[
            {header: "header 1", content: "content 1"},
            {header: "header 2", content: "content 2"}           
        ]
    }


    render(){
        return (
            <div className="App">
                <NavBar />
                <div className="article_container">
                    <div className="ac_header">
                        <ul>
                            <li>Content</li>
                        </ul>
                    </div>
                    <Content 
                        articleheader={this.state.articleheader}
                        articlecontent={this.state.articlecontent}
                    />
                    <Content 
                        articleheader={this.state.articleheader}
                        articlecontent={this.state.articlecontent}
                    />
                    <Content 
                        articleheader={this.state.articleheader}
                        articlecontent={this.state.articlecontent}
                    />
                    <Content />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Home;