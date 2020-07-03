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

        drugName: "",
        drugStrength: "",
        drugFrequency: "",

        allergieDrugName: "",
        allergieReaction: "",
        isSubmit: false,
        patient: {
            firstName: "",
            lastName: "",
            DOB: "",
            maritalStatus: "",
            problems: [
                { year: "", reason: "", ukey: 100 }
            ],
            drugs: [
                { name: "", strength: "", frequency: "", ukey: 200 }
            ],
            allergies: [
                { drugName: "", reaction: "", ukey: 300 }
            ]
        }
    };

    handleSubmit = (data) => {
        // const newpatient= event.state.patient;
        // console.log(data);

        this.setState({
            patient: data,
            isSubmit: true
        }, () => console.log(this.state.patient));
    }


    render() {
        return (
            <div>
                {/* <HealthForm patient={this.state.patient} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> */}
                <HealthForm patient={this.state.patient} onSubmit={this.handleSubmit} isSubmit={this.state.isSubmit} />
            </div>
        );
    }

}

export default HealthHistory;