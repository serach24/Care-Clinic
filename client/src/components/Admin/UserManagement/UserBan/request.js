export const getUsers = (ths) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/superusers", {
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
            // console.log(json)
            if (json !== undefined) {
                ths.setState({chosenUsers: json.users,
                                users: json.users});
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const deUser = (rbody) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/superusers", {
        method: "PATCH",
        body: JSON.stringify(rbody),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // console.log("200")
                return;
            }
        })
        .catch(error => {
            console.log(error);
        });
};