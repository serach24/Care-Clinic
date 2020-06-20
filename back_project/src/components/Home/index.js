import React from "react";

//importing components
import Content from "./../Content";
import NavBar from "./../NavBar";

import "./styles.css";

class Home extends React.Component{
    article = {
        header: "",
        context: ""
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
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Home;