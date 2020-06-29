import React from "react";
import HealthForm from "../HealthForm";

class HealthHistory extends React.Component {

    state = {
        patient: {
            name: "",
            DOB: "",
            maritalStatus: "",
            problemList:[
                {year:"", reason:""}
            ],
            drugList:[
                {drugName:"", strength:"", frequency:""}
            ],
            allergies:[
                {drugName:"", reaction:""}
            ]
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        log(target);
        log(value+'value');
        log(name+'name');
    
    };
    
render () {
    return (
        <div>
            <HealthForm patient={this.state.patient} handleChange={this.handleChange}/>
        </div>
    );
}

}

export default HealthHistory;