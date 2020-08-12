export const Apporequest = (ths) => {
    // Create our request constructor with all the parameters we need

    const request = new Request("/patients/", {
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
        if (res.status === 200) {
            return res.json();
        }
    })
    .then(json => {
        if (json.appos !== undefined) {
            // console.log(json.articles);
            ths.setState({doctors: json.appos})
        }
    })
    .catch(error => {
        console.log(error);
    });
};