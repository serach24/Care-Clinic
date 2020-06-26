import React from "react";

//importing components
import ContentList from "../../components/ContentList";
import NavBar from "../../components/ui/NavBar";
import StoryPage from "../../components/StoryPage";

import "./styles.css";

class Home extends React.Component{
    state = {
        articleheader: "What’s Next: COVID-19 podcast – (Ep 22) Vivek Goel on contact tracing apps",
        articlecontent : ["A made-in-Canada app that notifies those who may have been in contact with people with COVID-19 is coming to Ontario in July.", 
                    "The way in which this technology works is, when two users come close to each other, their Bluetooth systems exchange encrypted keys,” says Vivek Goel, the University of Toronto’s vice-president, research and innovation, and strategic initiatives, and a professor at the Dalla Lana School of Public Health. “These keys are uploaded to a database. When a user of the app is confirmed with having the disease, they are provided with a special code to upload. This triggers an exposure notification for everyone that has been in contact with that user.",
                    "In episode 22 of his podcast on the pandemic, Goel – a renowned public health expert and founding head of Public Health Ontario, which was set up in response to the 2003 SARS outbreak – discusses how contact tracing apps work, as well as their benefits and limitations. ",
                "COVID-19: What’s Next is a bi-weekly podcast created by Goel in collaboration with a University of Toronto Communications team led by producer Lisa Lightbourn.",
            "As of July 1, Goel will take on a new role as a special adviser to U of T’s president and provost, helping to guide the university’s COVID-19 planning efforts.",
        "Note: The information in this podcast is current as of the posting date. Listeners should consult their local public health agency for the latest information in their jurisdiction."],
        articles :[
            {header: "10th Ebola outbreak in the Democratic Republic of the Congo declared over; vigilance against flare-ups and support for survivors must continue", content: "Today marks the end of the 10th outbreak of Ebola virus disease in the Democratic Republic of the Congo (DRC). This long, complex and difficult outbreak has been overcome due to the leadership and commitment of the Government of the DRC, supported by the World Health Organization (WHO), a multitude of partners, donors, and above all, the efforts of the communities affected by the virus."},
            {header: "New Ebola outbreak detected in northwest Democratic Republic of the Congo; WHO surge team supporting the response", content: "The Government of the Democratic Republic of the Congo announced today that a new outbreak of Ebola virus disease is occurring in Wangata health zone, Mbandaka, in Équateur province. The announcement comes as a long, difficult and complex Ebola outbreak in eastern Democratic Republic of the Congo is in its final phase, while the country also battles COVID-19 and the world’s largest measles outbreak."},
            {header: "10th Ebola outbreak in the Democratic Republic of the Congo declared over; vigilance against flare-ups and support for survivors must continue", content: "Today marks the end of the 10th outbreak of Ebola virus disease in the Democratic Republic of the Congo (DRC). This long, complex and difficult outbreak has been overcome due to the leadership and commitment of the Government of the DRC, supported by the World Health Organization (WHO), a multitude of partners, donors, and above all, the efforts of the communities affected by the virus."},
            {header: "New Ebola outbreak detected in northwest Democratic Republic of the Congo; WHO surge team supporting the response", content: "The Government of the Democratic Republic of the Congo announced today that a new outbreak of Ebola virus disease is occurring in Wangata health zone, Mbandaka, in Équateur province. The announcement comes as a long, difficult and complex Ebola outbreak in eastern Democratic Republic of the Congo is in its final phase, while the country also battles COVID-19 and the world’s largest measles outbreak."},
            {header: "10th Ebola outbreak in the Democratic Republic of the Congo declared over; vigilance against flare-ups and support for survivors must continue", content: "Today marks the end of the 10th outbreak of Ebola virus disease in the Democratic Republic of the Congo (DRC). This long, complex and difficult outbreak has been overcome due to the leadership and commitment of the Government of the DRC, supported by the World Health Organization (WHO), a multitude of partners, donors, and above all, the efforts of the communities affected by the virus."},
            {header: "New Ebola outbreak detected in northwest Democratic Republic of the Congo; WHO surge team supporting the response", content: "The Government of the Democratic Republic of the Congo announced today that a new outbreak of Ebola virus disease is occurring in Wangata health zone, Mbandaka, in Équateur province. The announcement comes as a long, difficult and complex Ebola outbreak in eastern Democratic Republic of the Congo is in its final phase, while the country also battles COVID-19 and the world’s largest measles outbreak."}        
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
                {/* <StoryPage header={this.state.articleheader} content={this.state.articlecontent} /> */}
            </div>
        );
    }
}

export default Home;