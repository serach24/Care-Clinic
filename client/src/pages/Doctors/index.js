import React from "react";

//importing components
import DoctorList from "../../components/DoctorList";
import RightPart from "../../components/RightPart";
import "./styles.css";
import {getDoctors, getDoctorss} from "./request";

class Doctors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            doctors:[]
        };
        
        // getDoctorss(this, this.props.match.params.expertise);
    }
    componentDidMount(){
        getDoctors(this);
    }

    handleClick = (expertise) => {
        getDoctorss(this,expertise);
        // event.preventDefault();
    }

    render(){
        const {app} =this.props;
        return (
            <div className="App">
                <div className="content">
                <DoctorList app={app} doctors={this.state.doctors}/>
                <RightPart app={this}/>
                </div>
                {/* <StoryPage header={this.state.articleheader} content={this.state.articlecontent} /> */}
            </div>
        );
    }
}

export default Doctors;
