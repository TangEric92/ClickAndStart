import * as React from "react";

//--- Screens
import Home from "../screens/Home";
import Carte from "../screens/Carte";
import Clients from "../screens/Clients";
import Favoris from "../screens/Favoris";
import Plus from "../screens/Plus";

//--- Tabnavigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carte" component={Carte} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Plus" component={Plus} />
    </Tab.Navigator>
  );
}
