import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import Car from '../assets/GreenCarStock.png'
import React from "react";
const Options = [
  { key: "1", title: "Parallel Parking", handler: 'Parallel_Parking', temp: 'Map'},
  { key: "2", title: "Driving (Roads)", handler: 'Driving_Roads', temp: 'Map'},
  { key: "3", title: "Driving (Freeway)", handler: 'Driving_Freeway', temp: 'Map'},
  { key: "4", title: "Driving (Parking Lot)", handler: 'Driving_Lot', temp: 'Map'},
  
];
const Practice_Selections = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.viewContainer}>
      <Text style={styles.headerText}>What would you like to practice?</Text>
      <FlatList
        style={ styles.FlatList }
        data={ Options }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate(item.temp)}>
              <View style={styles.item}>
                <Text style={styles.listText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Image style={styles.stockImage} source={Car}/>
    </View>
  );
};

export default Practice_Selections;

const styles = StyleSheet.create({
  viewContainer: {
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },

  headerText: {
    alignSelf: "center",
    fontSize: "15px",
    textAlign: "center",
    paddingVertical: "5%",
    fontWeight: 'bold'
  },

  item: {
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    width: "100%",
  },

  listText: {
    fontSize: 18,
  },

  stockImage: {
    height: '30%',
    width: '86%',
    resizeMode: 'fill',
    marginBottom: '5%',
  },
  FlatList: {
    height: "60%",
  },
});
