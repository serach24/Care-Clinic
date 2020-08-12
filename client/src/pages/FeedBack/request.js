export const Addfeed = (ths) => {
    // Create our request constructor with all the parameters we need

    const request = new Request("/feed/", {
        method: "post",
        body: JSON.stringify(ths),
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
    .catch(error => {
        console.log(error);
    });
};