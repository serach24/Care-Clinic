export const getDoctors = (comp,expertise) => {
    // Create our request constructor with all the parameters we need
    // console.log(reqBody);
    let request;
    if (expertise !== null){
        request = new Request(`/doctors/doctorlst/${expertise}`, {
            method: "get",
            body: JSON.stringify(reqBody),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
    }
    else{
        request = new Request("/doctors/", {
            method: "get",
            body: JSON.stringify(reqBody),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });        
    }


    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json !== undefined) {
                console.log("here"+json);
                comp.setState({
                    doctors: json.doctors
                },() => console.log(comp.state.doctors))
            }
        })
        .catch(error => {
            console.log(error);
        });
};