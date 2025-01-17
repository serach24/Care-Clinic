import React from "react";

//importing components
import StoryPage from "../../components/StoryPage";

import "./styles.css";

class About extends React.Component {
    state = {
        // the data below need a serverCall to get
        article: {
            title: "About Our Project",
            content: "Our web application is an online clinic, where patients can chat with doctors about their symptoms and get a prescription sent to them through the app. This is aimed at more common ailments (colds, headaches, behind counter supplements like iron pills, UTIs, etc) and not used for more complex cases.\nLiving in a pandemic, it’s getting increasingly difficult to get out of the house, especially to see a doctor for non-COVID-19 issues. The goal of this app is to provide a safe alternative to a traditional walk-in clinic, from the comfort of one’s home. It will serve those who have simple issues for a doctor, without crowding a walk-in clinic. There will be views for both doctors and pharmacists as well, to increase their comfort as well. We also provide free educational videos on health on our webpage as an alternative for those who cannot afford the traditional doctor. We see this application as useful around the globe, both in wealthy and in developing countries."
        }
    };


    render() {
        return (
            <div className="App">
                {/* <HealthHistory/> */}
                <StoryPage article={this.state.article} />
            </div>
        );
    }
}

export default About;
