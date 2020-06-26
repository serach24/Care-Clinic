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
            </div>
        );
    }
}

export default Home;