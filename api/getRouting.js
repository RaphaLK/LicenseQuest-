import fetchToken from "./token";

const getRouting = async () => {

    let event = {
        wp1: { lat: 37.773355, lon: -122.440830 },
        wp2: { lat: 37.723297, lon: -122.402936 }
    }
    const wp1 = event.wp1;
    const wp2 = event.wp2;
    try {
        // Fetching the app token
        const token = await fetchToken();
        let routeId = "";
        const reqRoute = {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            redirect: 'follow'
        };

        const reqResp = await fetch(`https://api.iq.inrix.com/findRoute?wp_1=${wp1.lat}%2C${wp1.lon}&wp_2=${wp1.lat}%2C${wp1.lon}&format=json`, reqRoute);
        const jsonResp = await reqResp.json();
        console.log(jsonResp);
        routeId = jsonResp.result.trip.routes[0].id;


        // Fetching the route details
        const routeOptions = {
            method: 'GET',
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            redirect: 'follow'
        };

        const routeResponse = await fetch(`https://api.iq.inrix.com/route?format=json&routeOutputFields=all&routeId=37864900&useTraffic=true`, routeOptions);
        const jsonResult = await routeResponse.json();
        console.log(jsonResult.result);
        console.log(jsonResult.result.trip.routes[0].points.coordinates);
        return jsonResult.result.trip.routes[0].points.coordinates;

        // Fetching the route ID

        // Returning success response
        // return {
        //     statusCode: 200,
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Headers": "*"
        //     },
        //     body: JSON.stringify(result),
        // };
    } catch (error) {
        // Returning error response
        // return {
        //     statusCode: 500,
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Headers": "*"
        //     },
        //     body: JSON.stringify(error),
        // };
        console.log(error);

    };
}
export default getRouting;
