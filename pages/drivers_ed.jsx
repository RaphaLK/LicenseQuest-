import React, {useState} from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, Button, TouchableOpacity, Linking } from 'react-native';

var initialDisplay = [
  { key: '1', title: 'Michael Wong Driving Instructor School', url: 'https://www.yelp.com/biz/michael-wong-driving-instructor-school-san-francisco'},
  { key: '2', title: 'Rivadavia Driving School', url: 'https://www.yelp.com/biz/rivadavia-driving-school-san-francisco-2' },
  { key: '3', title: 'LT Driving School', url: 'https://www.yelp.com/biz/lt-driving-school-burlingame-3' },
  { key: '4', title: 'ABC Driving School', url: 'https://www.yelp.com/biz/abc-driving-school-union-city-2' },
  { key: '5', title: 'Ann\'s Driving School', url: 'https://www.yelp.com/biz/anns-driving-school-san-francisco-2' },
  { key: '6', title: 'Bill\'s Defensive Driving School', url: 'https://www.yelp.com/biz/bills-defensive-driving-school-san-francisco-2' },
  { key: '7', title: 'Fun Driving\'s Cool', url: 'https://www.yelp.com/biz/fun-drivings-cool-daly-city' },
  { key: '8', title: 'Confident Driving School', url: 'https://www.yelp.com/biz/confident-driving-school-san-francisco-3' },
  { key: '9', title: 'William Driving Instructor', url: 'https://www.yelp.com/biz/william-driving-instructor-san-francisco-4' },
  { key: '10', title: 'Winsen Driving School', url: 'https://www.yelp.com/biz/winsen-driving-school-san-francisco' },
  { key: '11', title: 'Payless Driving Lesson', url: 'https://www.yelp.com/biz/payless-driving-lesson-san-francisco' },
  { key: '12', title: 'Nelson Ng Driving Instructor', url: 'https://www.yelp.com/biz/nelson-ng-driving-instructor-san-francisco' },
  { key: '13', title: 'Regent Driving School', url: 'https://www.yelp.com/biz/regent-driving-school-san-francisco' },
  { key: '14', title: 'Monkey Moto School', url: 'https://www.yelp.com/biz/monkey-moto-school-san-francisco-2' },
  { key: '15', title: 'Bestway', url: 'https://www.yelp.com/biz/bestway-oakland-2' },
  { key: '16', title: 'CDL Training', url: 'https://www.yelp.com/biz/cdl-training-hayward-2' },
  { key: '17', title: 'Excel Driving School', url: 'https://www.yelp.com/biz/excel-driving-school-san-francisco' },
  { key: '18', title: 'Albert\'s of Standard Driving School', url: 'https://www.yelp.com/biz/alberts-of-standard-driving-school-san-francisco-2' },
  { key: '19', title: 'Manila Bay Area Driving School', url: 'https://www.yelp.com/biz/manila-bay-area-driving-school-daly-city-3' },
  { key: '20', title: 'San Francisco Driving School', url: 'https://www.yelp.com/biz/san-francisco-driving-school-san-francisco-4' },
  { key: '21', title: 'Ride On Driving School', url: 'https://www.yelp.com/biz/ride-on-driving-school-berkeley' },
  { key: '22', title: 'Standard Driving School', url: 'https://www.yelp.com/biz/standard-driving-school-san-francisco-7' },
  { key: '23', title: 'More', url: 'https://www.yelp.com/search?cflt=driving_schools&find_loc=San+Francisco%2C+CA' },

  // Add more locations as needed
];

const Item = ({ title, url }) => (
    <TouchableOpacity
      onPress={() => {
        // Open the specified URL when the item is pressed
        Linking.openURL(url);
      }}
    >
      <View style={styles.item}>
        <Text style={styles.listText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

const DriversEd = () => {
  const [searchText, setSearchText] = useState('');
  const [display, setDisplay] = useState(initialDisplay);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const newData = initialDisplay.filter((item) => {
        const itemData = item.title.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setDisplay(newData);
    } else {
      setDisplay(initialDisplay);
    }
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>Select Your Driver's Education</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Driver's Education"
        placeholderTextColor='black'
        onChangeText={handleSearch}
        value = {searchText}
      />
      <FlatList
        style={styles.FlatList}
        data={display}
        renderItem={({ item }) => (
          <Item title={item.title} url={item.url} />
        )}
      />
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
    color: 'blue',
    textDecorationLine: 'underline',  
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

export default DriversEd;
