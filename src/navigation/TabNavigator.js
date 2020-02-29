import * as React from "react";

//--- Screens
import Home from "../screens/Home";
import Carte from "../screens/Carte";
import Clients from "../screens/Clients";
import Favoris from "../screens/Favoris";
import Plus from "../screens/Plus";

//--- Tabnavigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Carte") {
            iconName = focused ? "map-marker" : "map-marker";
          } else if (route.name === "Clients") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Favoris") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Plus") {
            iconName = focused ? "th-list" : "th-list";
          }
          return <FontAwesome name={iconName} size={26} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carte" component={Carte} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Plus" component={Plus} />
    </Tab.Navigator>
  );
}
