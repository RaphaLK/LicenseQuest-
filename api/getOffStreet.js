
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const radius = event.radius;
    const point = event.point;

    var reqToken = {
        method: 'GET',
        headers: { "Authorization": "Bearer Bearer " },
        redirect: 'follow'
    };
    let token = "";
    await fetch("https://api.iq.inrix.com/auth/v1/appToken?appId=nbid7z6jvi&hashToken=bmJpZDd6Nmp2aXxBOE1mTVVaSnp0NzVXek9BUTlodkwxc3RBcFdUTXNDYThSSllOcmdq", reqToken)
        .then(response => response.json())
        .then(result => {
            token = result.token;
            console.log(token)
        });

    var reqOffStreet = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        redirect: 'follow'
    };


    fetch(`https://api.iq.inrix.com/lots/v3?point=${point.lat}%7C${point.lon}&radius=${radius}`, reqOffStreet)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return {
        statusCode: 500,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(error),
    };
};
