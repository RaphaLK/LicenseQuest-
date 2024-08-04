

const fetchToken = async () => {

    var requestOptions = {
        method: 'GET',
        headers: { Authorization: 'Bearer Bearer ' },
        redirect: 'follow',
    };
    try {
        // Using fetch
        const response = await fetch(
            'https://api.iq.inrix.com/auth/v1/appToken?appId=nbid7z6jvi&hashToken=bmJpZDd6Nmp2aXxBOE1mTVVaSnp0NzVXek9BUTlodkwxc3RBcFdUTXNDYThSSllOcmdq',
            requestOptions
        );
        const jsonData = await response.json();

        // Or using axios
        // const response = await axios.get('https://api.example.com/data');
        // const jsonData = response.data;


        console.log(jsonData.result.token);
        return jsonData.result.token;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export default fetchToken;