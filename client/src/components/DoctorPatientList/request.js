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
            // {
        //   id: 0,
        //   realName: "John Doe1",
        //   username: "testUser1",
        //   description: "headache, fever ...",
        //   appointTime: "2020-06-28 09:00 am",
        //   diagnosis: "",
        //   prescription: "",
        //   status: "Pending"
        // },
    .then(json => {
        if (json.appos !== undefined) {
            // console.log(json.articles);
            const _patients = [];
            const ap = json.appos;
            for (var i = 0; i < ap.length; i++) {
                const pid = ap[i].patientId
                const ddt = new Date(ap[i].appointmentTime)
                const now = new Date()
                var SST = 'Pending';
                
                if(ap[i].status === false){
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
                const pat = {
                    id: pid,
                    realName: ap[i].realName,
                    username: ap[i].username,
                    description: "",
                    appointTime: ddt,
                    diagnosis: "",
                    prescription: "",
                    status: SST,
                }
                console.log(pat)
                _patients.push(pat)
            }
            ths.setState({patients: _patients})
        }
    })
    .catch(error => {
        console.log(error);
    });
};