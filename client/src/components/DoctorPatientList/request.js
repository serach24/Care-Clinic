import {getProfileOnly} from "./../../auth/authUtil"

export const Apporequest = (ths) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/doctors/appointment/get", {
        method: "post",
        body: JSON.stringify(ths.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    // Send the request with fetch()
    fetch(request)
    .then(res => {
        console.log(request)
        if (res.status === 200) {
            return res.json();
        }
    })
    .then(json => {
        if (json.appos !== undefined) {
            // console.log(json.articles);
            var patients = [];
            const ap = json.appos;
            ap.forEach((patient,index) => {
                const pid = patient.patientId
                const ddt = new Date(patient.appointmentTime)
                const now = new Date()
                var SST = 'Pending';
                
                if(patient.status === false){
                    SST = "Pending"
                }
                else if ((Math.abs(ddt.getTime()-now.getTime()))<=86400000){
                    SST = "Current"
                }
                else if ((ddt.getTime()-now.getTime())>86400000){
                    SST = "Subsequent"
                }
                else if ((ddt.getTime()-now.getTime())<-86400000){
                    SST = "Passed"
                }
                else{
                    SST = "Declined"
                }
                const strTime= ddt.format('DD-MM-YYYY')
                const pat = {
                    id: index,
                    realName: patient.realName,
                    userName: patient.userName,
                    description: "",
                    appointTime: strTime,
                    diagnosis: "",
                    prescription: "",
                    status: SST
                }
                patients.push(pat);
            })
            console.log(patients);
        }
        ths.setState({patients:patients})
    })
    .catch(error => {
        console.log(error);
    });
};