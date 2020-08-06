import React from "react";

//importing components
import DoctorList from "../../components/DoctorList";
import NavBar from "../../components/ui/NavBar";
import RightPart from "../../components/RightPart";
import "./styles.css";

class Doctors extends React.Component{

    render(){
        const {app} =this.props;
        return (
            <div className="App">
                <div className="content">
                <DoctorList app={app}/>
                <RightPart app={app} />

                </div>
                {/* <StoryPage header={this.state.articleheader} content={this.state.articlecontent} /> */}
            </div>
        );
    }
}

export default Doctors;
