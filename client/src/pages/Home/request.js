export const homeContent = (homeComp) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/articles", {
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
            if (json.articles !== undefined) {
                // console.log(json.articles);
                homeComp.setState({articles: json.articles})
            }
        })
        .catch(error => {
            console.log(error);
        });
};