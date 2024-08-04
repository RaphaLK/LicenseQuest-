import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Button,
  Linking,
} from "react-native";
import FQImage from "../assets/facts_quizzes.png";
import { useNavigation } from "@react-navigation/native";
const DATA = [
  {
    key: "1",
    title: "California DMV Driving Manual",
    handler: "Manual",
    link: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/",
  },
  {
    key: "2",
    title: "Permit Test Questions",
    handler: "Permit Test",
    link: "",
  },
  {
    key: "3",
    title: "Find a Driver's School",
    handler: "School",
    link: ""
  },
  {
    key: "4",
    title: "Behind-the-Wheel Test FAQ",
    handler: "FAQ",
    link: "https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/fast-facts/preparing-for-your-driving-test-ffdl-22/",
  },
  // Add more locations as needed
];

const Item = ({ title, handler, link }) => {
  const navigation = useNavigation();

  const handleURL = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  if (title === "Permit Test Questions" || title === "Find a Driver's School") {
    return (
      <View style={styles.item}>
        <Button title={title} onPress={() => navigation.navigate(handler)} />
      </View>
    );
  } else {
    return (
      <View style={styles.item}>
        <Button title={title} onPress={() => handleURL(link)} />
      </View>
    );
  }
};

const FactsQuizzes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Useful Information</Text>
      <FlatList
        style={styles.FlatList}
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} handler={item.handler} link={item.link} />
        )}
        keyExtractor={(item) => item.key}
      />
      <Image style={styles.logo} source={FQImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    alignSelf: "center",
    fontSize: "15px",
    textAlign: "center",
    fontFamily: "Verdana",
    paddingVertical: "5%",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    width: "100%",
  },
  title: {
    fontSize: 18,
  },
  logo: {
    height: "52%",
    width: "100%",
    marginBottom: "5%",
  },
  FlatList: {
    height: "30%",
  },
});

export default FactsQuizzes;
