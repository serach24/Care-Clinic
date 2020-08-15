export const getHealth = (healthComp,id) => {
    // Create our request constructor with all the parameters we need
    // console.log(id);
    const request = new Request(`/patients/${id}`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // console.log(res.json());
                return res.json();
            }
        })
        .then(json => {
            if (json._id !== undefined) {
                console.log(json);
                healthComp.setState({patient: json})
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const changeHealth = (healthComp,id) => {
    // Create our request constructor with all the parameters we need
    console.log(id);
    const request = new Request(`/patients/${id}`, {
        method: "post",
        body:JSON.stringify(healthComp.state.patient),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // console.log(res.json());
                return res.json();
            }
        })
        .then(json => {
            if (json._id !== undefined) {
                console.log(json);
                // state.setState({patient: json})
            }
        })
        .catch(error => {
            console.log(error);
        });
};