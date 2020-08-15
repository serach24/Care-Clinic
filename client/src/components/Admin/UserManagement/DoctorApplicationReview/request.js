
export const change = (id,index,TFN) =>{
        // const url = "/users/get_profile/"+id;
        const request = new Request("/superusers/fish/change/"+index+"/"+id+"/"+TFN, {
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
                    //console.log(json)
                    return(json)
                }
    
            })
            .catch(error => {
                console.log(error);
            });
}
export const Pendingrequest = (ths) => {
    // Create our request constructor with all the parameters we need
    const request = new Request("/superusers/pendingdoc/get", {
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
                 console.log(json)
                ths.setState({ doctors: json.doctors});
        })
        .catch(error => {
            console.log(error);
        });
};