import React, {useEffect, useState} from 'react';
import axios from 'axios'; // If you're using axios
import {Text} from 'react-native';
const MyComponent = () => {
  const [token, setToken] = useState ([]);
  var requestOptions = {
    method: 'GET',
    headers: {Authorization: 'Bearer Bearer '},
    redirect: 'follow',
  };
  useEffect (() => {
    const fetchData = async () => {
      try {
        // Using fetch
        const response = await fetch (
          'https://api.iq.inrix.com/auth/v1/appToken?appId=nbid7z6jvi&hashToken=bmJpZDd6Nmp2aXxBOE1mTVVaSnp0NzVXek9BUTlodkwxc3RBcFdUTXNDYThSSllOcmdq',
          requestOptions
        );
        const jsonData = await response.json ();

        // Or using axios
        // const response = await axios.get('https://api.example.com/data');
        // const jsonData = response.data;

        setToken (jsonData.token);
        console.log (jsonData.token);
      } catch (error) {
        console.error ('Error fetching data:', error);
      }
    };

    fetchData ();
  }, []);

  return <Text>{JSON.stringify (token)}</Text>;
};

export default MyComponent;
