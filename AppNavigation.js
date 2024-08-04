import FactsQuizzes from "./pages/Facts_Quizzes.jsx";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PracticeSelectStack from "./pages/practiceSelectStack.jsx";
import DMVStack from './pages/DMVStack.jsx'
import MoreInfoStack from "./pages/MoreInfoStack.jsx";
import SelectDMV from "./pages/SelectDMV.jsx";
import userProfile from "./pages/UserProfile.jsx";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
export default AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Practice") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Find DMV") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "More Info") {
            iconName = focused ? "book" : "book-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Practice"
        component={PracticeSelectStack}
        options={{ headerShown: false }}
      />
    
      <Tab.Screen name="Find DMV" component={DMVStack} options={{ headerShown: false }} />
      <Tab.Screen name="User" component={userProfile} />
      <Tab.Screen name="More Info" component={MoreInfoStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
