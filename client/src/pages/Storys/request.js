export const getArticle = (articleId, state) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`/articles/${articleId}`, {
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
            if (json !== undefined) {
                // console.log(json.articles);
                state.setState({article: json})
            }
        })
        .catch(error => {
            console.log(error);
        });
};