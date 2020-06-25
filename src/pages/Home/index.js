import React from "react";

//importing components
import ContentList from "../../components/ContentList";
import NavBar from "../../components/ui/NavBar";

import "./styles.css";

class Home extends React.Component{
    state = {
        articleheader: "Header",
        articlecontent: "Content",
        articles :[
            {header: "Covid 19", content: "content 1"},
            {header: "How to keep your mind clear", content: "content 2"}           
        ]
    };


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
                    <ContentList articles={this.state.articles}/>
                </div>
            </div>
        );
    }
}

export default Home;