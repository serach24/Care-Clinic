export const getDoctors = (ths) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/doctors", {
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
                return res.json();
            }
        })
        .then(json => {
            if (json.doctors !== undefined) {
                console.log(json.doctors);
                ths.setState({
                    doctors: json.doctors
                })
            }
        })
        .catch(error => {
            console.log(error);
        });
};