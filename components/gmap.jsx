import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import getRouting from '../api/getRouting';
const GMapView = () => {
  const [polylineCoordinates, setPolylineCoordinates] = useState ([
    {latitude: 37.773355, longitude: -122.440830},
    {latitude: 37.723297, longitude: -122.402936},
  ]);
  const [markers, setMarkers] = useState ([
    {
      id: 1,
      title: 'Marker 1',
      coordinate: {latitude: 37.773355, longitude: -122.440830},
    },
    {
      id: 2,
      title: 'Marker 2',
      coordinate: {latitude: 37.723297, longitude: -122.402936},
    },
    // Add more markers as needed
  ]);

  useEffect (() => {
    // Update the document title using the browser API
    try {
      if (polylineCoordinates.length < 5) {
        getRouting ().then (arr => {
          let k = arr.map (elem => {
            
            //console.log ({longitude: elem[0], latitude: elem[1]});
            return {latitude: elem[1], longitude: elem[0]};
          });
          console.log ('k', k);
          setPolylineCoordinates (k);
        });
      }
    } catch (e) {
      console.log (e);
    }
  },[]);
  //Allowing for navigation using proper lines
  const pushCoordinates = (lat, long) => {
    setPolylineCoordinates ([
      ...polylineCoordinates,
      {latitude: lat, longitude: long},
    ]);
  };

  const clearCoordinates = () => {
    setPolylineCoordinates ([]);
  };

  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // Set your Google Maps API key here
        provider={PROVIDER_GOOGLE}
        customMapStyle={[]}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        showsPointsOfInterest={true}
        showsCompass={true}
        showsScale={true}
        showsBuildings={true}
        showsTraffic={true}
        showsIndoors={true}
        showsIndoorLevelPicker={true}
        showsIndoorLevelPicker={true}
        showsIndoorLevelPicker={true}
        showsIndoorLevelPicker={true}
        showsIndoorLevelPicker={true}
        loadingEnabled={true}
        onRegionChangeComplete={region => console.log (region)}
      >
        {markers.map (marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
          />
        ))}
        {polylineCoordinates > 5 &&
          <Polyline
            coordinates={polylineCoordinates}
            strokeColor="#000" // Customize the line color
            strokeWidth={3} // Customize the line width
          />}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GMapView;
