import React from "react";
import HealthForm from "../../components/Patient/HealthForm";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { getHealth, changeHealth } from './request';

const log = console.log;
class HealthHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmit: true,
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
        }
        
    };
    componentDidMount = () => {
        getHealth(this, this.props.match.params.id);
    }

    editable = (event) =>{
        this.setState({
            isSubmit: !event.target.checked
        },()=> console.log(this.state.isSubmit))
    }

    handleSubmit = (data) => {
        // const newpatient= event.state.patient;
        // console.log(data);

        this.setState(() => {
            return {
                patient: data,
                isSubmit: true
            }
        }, () => {
            // console.log(this);
            changeHealth(this, this.props.match.params.id);
            // console.log(this.state.patient);
        });
    }


    render() {
        const { which, change, UUid } = this.props;
        return (
            <div>
                {/* <div>1{this.state.patient.firstName}</div> */}
                <HealthForm patient={this.state.patient} onSubmit={this.handleSubmit} isSubmit={this.state.isSubmit} edit={this.editable}/>
            </div>
        );
    }

}

export default withStyles(styles, { withTheme: false })(HealthHistory);