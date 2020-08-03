import React from "react";

//importing components
import DoctorList from "../../components/DoctorList";
import NavBar from "../../components/ui/NavBar";
import RightPart from "../../components/RightPart";
import "./styles.css";

class Doctors extends React.Component{

    render(){
        return (
            <div className="App">
                <div className="content">
                <DoctorList which={this.props.which} change={this.props.change} UUid={this.props.UUid}/>
                <RightPart />

                </div>
                {/* <StoryPage header={this.state.articleheader} content={this.state.articlecontent} /> */}
            </div>
        );
    }
}

export default Doctors;
