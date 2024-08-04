import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, Button,Linking,} from 'react-native';
import DMVLogo from '../assets/dmv_logo.png'
import { useNavigation } from '@react-navigation/native';



var initialDisplay = [
  { key: '3', 
    title: 'Los Gatos',
    link: "https://www.google.com/maps/place/Los+Gatos+DMV/@37.2338727,-121.9779939,15z/data=!4m2!3m1!1s0x0:0x8f2815b4d20d15ae?sa=X&ved=2ahUKEwi5naOu9r6CAxVuIEQIHRrTDuMQ_BJ6BAhYEAA" },
  { key: '5', title: 'Fremont', link: 'https://www.google.com/maps/place/Fremont+DMV/@37.5533214,-122.0071549,15z/data=!4m6!3m5!1s0x808fbf762c89b235:0xf191288f10f7c1f3!8m2!3d37.5533214!4d-122.0071549!16s%2Fg%2F1tf_njw1?entry=ttu' },
  { key: '4', title: 'Redwood City', link: 'https://www.google.com/maps/place/Redwood+City+DMV/@37.4926094,-122.2316359,17z/data=!3m1!4b1!4m6!3m5!1s0x808fa251a39e8639:0x191602dee23ede9e!8m2!3d37.4926052!4d-122.229061!16s%2Fg%2F1tdywlry?entry=ttu' },
  { key: '2', title: 'San Jose', link: 'https://www.google.com/maps/place/San+Jose+DMV/@37.314963,-121.8792944,17z/data=!3m1!4b1!4m6!3m5!1s0x808e33379af2ebb5:0x430d99dba8c90ffb!8m2!3d37.3149588!4d-121.8767195!16s%2Fg%2F11b8072hyx?entry=ttu'},
  { key: '6', title: 'San Mateo', link: 'https://www.google.com/maps/place/San+Mateo+DMV/@37.5786419,-122.3266947,17z/data=!3m1!4b1!4m6!3m5!1s0x808f9dda44dfe47d:0x55ae98ca132e0d47!8m2!3d37.5786377!4d-122.3241198!16s%2Fg%2F1v6wpkld?entry=ttu' },
  { key: '7', title: 'San Francisco', link: "https://www.google.com/maps/dir/San+Francisco+DMV,+1377+Fell+St,+San+Francisco,+CA+94117/37.773116,-122.4377281/37.7768551,-122.4382481/37.7748283,-122.4392516/37.775566,-122.4409116/37.7733362,-122.4437936/37.7767707,-122.4466857/37.7777934,-122.4384134/37.7737286,-122.4402053/@37.776685,-122.4431785,16z/data=!4m16!4m15!1m5!1m1!1s0x808580ae702d7141:0xa679aa8653912327!2m2!1d-122.4404623!2d37.7733492!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!3e0?entry=ttu" },
  { key: '1', title: 'Santa Clara', link: 'https://www.google.com/maps/place/Santa+Clara+DMV/@37.350276,-121.9965376,17z/data=!3m1!4b1!4m6!3m5!1s0x808fb5f5eb39f473:0xb202e02cfa499cc5!8m2!3d37.3502718!4d-121.9939627!16s%2Fg%2F1tgm32p4?entry=ttu'},
  { key: '8', title: 'Santa Teresa', link: 'https://www.google.com/maps/place/Santa+Teresa+DMV/@37.2901118,-121.9684386,12z/data=!4m10!1m2!2m1!1ssanta+Teresa+dmv!3m6!1s0x808e2fb046d12e4b:0xc91e274a700927c1!8m2!3d37.2297358!4d-121.7781125!15sChBzYW50YSBUZXJlc2EgZG12WhIiEHNhbnRhIHRlcmVzYSBkbXaSARxkZXBhcnRtZW50X29mX21vdG9yX3ZlaGljbGVzmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJwTW1adWMxOTNSUkFC4AEA!16s%2Fg%2F11b7ln07q2?entry=ttu'},

];



const DMVScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredData = initialDisplay.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const Item = ({title,link}) => {
    const handleURL = async (url) => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    };
  

  
    return (
      <View style={styles.item}>
        <Button title={title} onPress={() => handleURL(link)} />
      </View>
    );
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>Select Your DMV Location</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Location"
        placeholderTextColor='black'
        onChangeText={handleSearch}
        value = {searchText}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Item title={item.title} link={item.link} />}
        keyExtractor={item => item.key}
      />
      <Image style = {styles.logo} source = {DMVLogo}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  searchBar: {
    height: 45,
    width: '75%',
    marginVertical: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: '10%',
    borderColor: 'gray',
  },

  item: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    width: '100%',
  },

  listText: {
    fontSize: 18,
  },

  logo: {
    height: '25%',
    width: '60%',
    resizeMode: 'contain',
    marginBottom: '5%',
  },
  FlatList: {
    height : '60%',
  },
});

export default DMVScreen;
