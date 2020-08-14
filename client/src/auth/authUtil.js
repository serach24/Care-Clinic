

export const readCookie = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.userId) {
                app.setState({ userId: json.userId,
                               loginState: json.loginState
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};


// A function to send a POST request with the user to be logged inw
export const LoginRequest = (loginComp, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(loginComp.state),
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
            if (json.userId !== undefined) {
                app.setUserId(json.userId);
                app.setState({loginState: json.loginState});
                app.setState({profile:json.profile});
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            app.setState({
                userId: null,
                loginState: 0,
                profile:{}
                // message: { type: "", body: "" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};

export const signup = (info, app) => {
    console.log(info.state);
    const request = new Request("/users", {
        method: "post",
        body: JSON.stringify(info.state),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    console.log(request.body);
    fetch(request)
        .then(res =>{
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json =>{
            if(json && json.userId){
                app.setState({ userId: json.userId,
                    loginState: json.loginState,
                    profile:json.profile
                });
            }
        })
        .catch(error => {
            console.log(error);
        });

}
export const getProfileOnly = (id) => {
    // const url = "/users/get_profile/"+id;
    const request = new Request(`/users/get_profile/${id}`, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if(json){
                console.log(json)
                return(json)
            }

        })
        .catch(error => {
            console.log(error);
        });
};
export const getProfile = (app) => {
    const url = "/users/get_profile";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.userId) {
                app.setState({ profile: json
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};
export const changePhoneEmail = (info, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/users/changephoneEmail", {
        method: "post",
        body: JSON.stringify(info.state),
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
        if (json && json.userId) {
            app.setState({ profile: json
            });
        }
    })
    .catch(error => {
        console.log(error);
    });
};