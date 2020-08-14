import React from "react";

//importing components
import DoctorList from "../../components/DoctorList";
import RightPart from "../../components/RightPart";
import "./styles.css";
import {getDoctors} from "./request";

class Doctors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            doctors:[]
        };
        getDoctors(this);
    }

    render(){
        const {app} =this.props;
        return (
            <div className="App">
                <div className="content">
                <DoctorList app={app} doctors={this.state.doctors}/>
                <RightPart app={app} />

                </div>
                {/* <StoryPage header={this.state.articleheader} content={this.state.articlecontent} /> */}
            </div>
        );
    }
}

export default Doctors;
