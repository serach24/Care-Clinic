import React from "react";

//importing components
import ContentList from "../../components/ContentList";
import RightPart from "../../components/RightPart";

import "./styles.css";
// import a from "./img/1.jpg";
// import b from "./img/2.jpeg";
// import c from "./img/3.jpg";
// import d from "./img/4.jpg";
import { homeContent } from "./request";

class Home extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        // homeContent(this);
        this.state = {
            // the data below need a serverCall to get.
             articles: [{
                likes: [],
                _id: "",
                title: "",
                content: "",
                comments: [
                    {
                        _id: "",
                        img: "",
                        userName: "",
                        userProfileLink:"",
                        commentTime: "",
                        comment: ""
                    }
                ],
            }]
        }
        
    };
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
        homeContent(this);
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    handleClick =(event)=>{
        event.preventDefault();
        // console.log('yes')
    }
    render() {
        const { app } = this.props
        
        return (
            <div className="App">
                <div className="content">
                    <ContentList articles={this.state.articles} app={app}/>
                    {app.state.loginState !== 3 && <RightPart app={this} home="home"/>}
                </div>
            </div>
        );
    }
}

export default Home;
