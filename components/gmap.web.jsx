import MapView, {Marker, Polyline} from '@teovilla/react-native-web-maps';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native-web';
import Head from 'next/head';
import * as Location from 'expo-location';

const GMap = () => {
  const [location, setLocation] = useState (null);
  const [errorMsg, setErrorMsg] = useState (null);
  const [CurrentLocation, setCurrentLocation] = useState (null);
  const polylineCoordinates = [
    {latitude: 37.78825, longitude: -122.4324},
    {latitude: 37.75825, longitude: -122.4224},
    // Add more coordinates as needed
  ];
  const [markers, setMarkers] = useState ([
    {
      id: 1,
      title: 'Marker 1',
      coordinate: {latitude: 37.78825, longitude: -121.4324},
    },
    {
      id: 2,
      title: 'Marker 2',
      coordinate: {latitude: 37.75825, longitude: -121.4224},
    },
    // Add more markers as needed
  ]);
  console.log ('using web');
  useEffect (() => {
    // For web, use navigator.geolocation
    const getLocation = async () =>
      navigator.geolocation.getCurrentPosition (
        position => {
          const {latitude, longitude} = position.coords;
          console.log ('POSITION', position.coords);
          setCurrentLocation ({
            latitude: latitude,
            longitude: longitude,
          });
        },
        error => console.log (error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    const getStatus = async () =>
      Location.requestForegroundPermissionsAsync ().then (status => {
        if (status !== 'granted') {
          setErrorMsg ('Permission to access location was denied');
        }
      });

    const setLoc = async () =>
      Location.getCurrentPositionAsync ({}).then (loc => {
        setLocation (loc);
      });
    getLocation ();
    getStatus ();
    setLoc ();

    // For mobile devices, you can use other methods or libraries
    // For example, you might use the 'react-native-geolocation-service' library
    // Check the library documentation for proper usage on your platform
  }, []);
  return (
    <Head>

      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self' https: ; object-src 'none'"
      />
      <View>
        <MapView
          provider="google"
          googleMapsApiKey="AIzaSyDnlbyyDlH5dZfglmppvV1v9_HMuDVouHM"
          loadingFallback={
            <View>
              <Text>Loading...</Text>
            </View>
          }
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -121.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map (marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              pinColor="blue"
            />
          ))}
          {CurrentLocation &&
            <Marker
              key={3}
              coordinate={CurrentLocation}
              title="My Location"
              // description="You are here!"
              // pinColor="blue" // Customize the pin color
            />}

          <Polyline
            coordinates={polylineCoordinates}
            strokeColor="#000" // Customize the line color
            strokeWidth={3} // Customize the line width
          />
        </MapView>
      </View>
    </Head>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
  },
});
export default GMap;
