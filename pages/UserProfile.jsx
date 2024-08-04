import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import User from '../assets/user.png';
import MyComponent from '../api/getToken';
const UserProfile = () => {
  return (
    <View style={styles.entireContainerView}>
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <Image style={styles.imageStyles} source={User} />
      <Text style={styles.username}>USERNAME</Text>
      <MyComponent />
      <View style={styles.statsContainer}>
        <Text style={styles.stats}>Hours Driven: 20</Text>
        <Text style={styles.stats}>Questions Reviewed: 10</Text>
        <Text style={styles.stats}>Awards Earned: 2</Text>
        <Text style={styles.stats}>Miles Driven: 52 Miles</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create ({
  entireContainerView: {
    flex: '1',
    backgroundColor: '#D7E5CA',
  },

  imageStyles: {
    height: '30%',
    width: '50%',
    resizeMode: 'fill',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: '100%',
    marginTop: '5%',
  },

  username: {
    alignSelf: 'center',
    fontSize: '20',
    fontWeight: 'bold',
    marginVertical: '5%',
  },

  stats: {
    alignSelf: 'center',
    marginVertical: '2%',
    fontSize: '18',
    fontWeight: '200',
    backgroundColor: 'white',
    padding: '2%',
    borderRadius: '9',
    overflow: 'hidden',
  },
});
