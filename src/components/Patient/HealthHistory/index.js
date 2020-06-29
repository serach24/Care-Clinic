import React from "react";
import HealthForm from "../HealthForm";

const log = console.log;
class HealthHistory extends React.Component {

    state = {
        patientName: "",
        patientDOB: "",
        maritalStatus: "",

        problemYear: "",
        problemReason: "",

        drugName:"", 
        drugStrength:"", 
        drugFrequency:"",

        allergieDrugName:"", 
        allergieReaction:"",

        patient: {
            name: "",
            DOB: "",
            maritalStatus: "",
            problems:[
                {year:"", reason:""},
                {year:"", reason:""},
                {year:"", reason:""},
                {year:"", reason:""},
                {year:"", reason:""}
            ],
            drugs:[
                {name:"", strength:"", frequency:""},
                {name:"", strength:"", frequency:""},
                {name:"", strength:"", frequency:""},
                {name:"", strength:"", frequency:""},
                {name:"", strength:"", frequency:""}
            ],
            allergies:[
                {drugName:"", reaction:""},
                {drugName:"", reaction:""},
                {drugName:"", reaction:""},
                {drugName:"", reaction:""},
                {drugName:"", reaction:""}
            ]
        }
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        // const name = target.name;
        log(target);
        log(value+'value');
        // log(name+'name');
        this.setState({
            patientName: value
        });
    };

    handleSubmit = event => {
        alert('Submited' + this.state.patientName);
        event.preventDefault();
    }
    
render () {
    return (
        <div>
            <HealthForm patient={this.state.patient} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
    );
}

}

export default HealthHistory;