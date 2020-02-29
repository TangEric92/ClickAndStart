import * as React from "react";
import { Theme } from "../constants/Constants";
//--- Screens
import { Carte, Clients, Favoris, Home, Settings } from "../screens";

//--- Tabnavigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      // screenOptions
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
          } else if (route.name === "Settings") {
            iconName = focused ? "th-list" : "th-list";
          }
          return <FontAwesome name={iconName} size={26} color={color} />;
        }
      })}
      // tabBarOptions
      tabBarOptions={{
        activeTintColor: Theme.AppSelectedColor,
        inactiveTintColor: "#909090",
        style: {
          backgroundColor: Theme.AppColor,
          height: 60,
          paddingTop: 10,
          paddingBottom: 5
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carte" component={Carte} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
