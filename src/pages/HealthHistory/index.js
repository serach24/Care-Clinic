import React from "react";
import HealthForm from "../../components/Patient/HealthForm";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const log = console.log;
class HealthHistory extends React.Component {

    state = {
        isSubmit: false,
        // patient: {
        //     firstName: "",
        //     lastName:"",
        //     DOB: "",
        //     maritalStatus: "",
        //     problems:[
        //         {year:"", reason:"", ukey: 100 }
        //     ],
        //     drugs:[
        //         {name:"", strength:"", frequency:"", ukey:200}
        //     ],
        //     allergies:[
        //         {drugName:"", reaction:"", ukey:300}
        //     ]
        // },

        // the data below need a serverCall to get.
        patient: {
            firstName: " Ken ",
            lastName:" Cui ",
            DOB: "1999-09-09",
            maritalStatus: "Not married",
            problems:[
                {year:"2020", reason:"Apple addiction", ukey: 100 }
            ],
            drugs:[
                {name:"Apple", strength:"10", frequency:" Every day", ukey:200}
            ],
            allergies:[
                {drugName:"Banana", reaction:"Unkown", ukey:300}
            ]
        }
    };

handleSubmit = (data) => {
    // const newpatient= event.state.patient;
    // console.log(data);

    this.setState(() => {
        return {
        patient: data,
        isSubmit: true}
    },()=>console.log(this.state.patient));
}

    
render () {
    const {which, change, UUid, isEdit} = this.props;
    return (
        <div>
            {/* <div>1{this.state.patient.firstName}</div> */}
            {isEdit ? <HealthForm patient={this.state.patient} onSubmit = {this.handleSubmit} isSubmit={this.state.isSubmit}/> :
                        <HealthForm patient={this.state.patient} isSubmit={true}/>}
        </div>
    );
}

}

export default withStyles(styles, { withTheme: false })(HealthHistory);