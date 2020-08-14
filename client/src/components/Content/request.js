export const postLike = (comp,reqBody) => {
    // Create our request constructor with all the parameters we need
    // console.log(reqBody);
    const request = new Request("/comment/like", {
        method: "post",
        body: JSON.stringify(reqBody),
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
            if (json !== undefined) {
                // console.log(json);
                comp.setState(prevState => ({
                    likeStatus: !prevState.likeStatus
                }),() => console.log(comp.state.likeStatus))
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const delLike = (comp,reqBody) => {
    // Create our request constructor with all the parameters we need
    // console.log(reqBody);
    const request = new Request("/comment/like", {
        method: "delete",
        body: JSON.stringify(reqBody),
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
            if (json !== undefined) {
                // console.log(json);
                comp.setState(prevState => ({
                    likeStatus: !prevState.likeStatus
                }),() => console.log(comp.state.likeStatus))
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const postReply = (comp,reqBody) => {
    // Create our request constructor with all the parameters we need
    // console.log(reqBody);
    const request = new Request("/comment/", {
        method: "post",
        body: JSON.stringify(reqBody),
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
            if (json !== undefined) {
                // console.log(json);
                comp.setState({
                    comments: json
                },() => console.log(comp.state.comments))
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const getReply = (comp,reqBody) => {
    // Create our request constructor with all the parameters we need
    // console.log(reqBody);
    const request = new Request("/comment/", {
        method: "put",
        body: JSON.stringify(reqBody),
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
            if (json !== undefined) {
                // console.log(json);
                comp.setState({
                    comments: json
                })
            }
        })
        .catch(error => {
            console.log(error);
        });
};