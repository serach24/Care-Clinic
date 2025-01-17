import React from "react";
//importing components
import StoryPage from "../../components/StoryPage";
import covidImg from "./img/covid-19-1330px.jpg";
import {getArticle} from "./request";
import "./styles.css";

class Storys extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            article:{img:"", title:"", content:""},
        // the data below need a serverCall to get
        img: covidImg,
        articleheader: "What’s Next: COVID-19 podcast – (Ep 22) Vivek Goel on contact tracing apps",
        articlecontent : ["A made-in-Canada app that notifies those who may have been in contact with people with COVID-19 is coming to Ontario in July.", 
                    "The way in which this technology works is, when two users come close to each other, their Bluetooth systems exchange encrypted keys,” says Vivek Goel, the University of Toronto’s vice-president, research and innovation, and strategic initiatives, and a professor at the Dalla Lana School of Public Health. “These keys are uploaded to a database. When a user of the app is confirmed with having the disease, they are provided with a special code to upload. This triggers an exposure notification for everyone that has been in contact with that user.",
                    "In episode 22 of his podcast on the pandemic, Goel – a renowned public health expert and founding head of Public Health Ontario, which was set up in response to the 2003 SARS outbreak – discusses how contact tracing apps work, as well as their benefits and limitations. ",
                "COVID-19: What’s Next is a bi-weekly podcast created by Goel in collaboration with a University of Toronto Communications team led by producer Lisa Lightbourn.",
            "As of July 1, Goel will take on a new role as a special adviser to U of T’s president and provost, helping to guide the university’s COVID-19 planning efforts.",
        "Note: The information in this podcast is current as of the posting date. Listeners should consult their local public health agency for the latest information in their jurisdiction."],
        }
        console.log(this.props.match.params.id);
        
    }
    componentDidMount(){
        getArticle(this.props.match.params.id, this);
    }


    render(){
        // console.log(id);
        return (
            <div className="App">
                <StoryPage article={this.state.article} />
            </div>
        );
    }
}

export default Storys;
