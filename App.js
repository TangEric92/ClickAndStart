import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StatusBar } from "react-native";
import { Theme } from "./src/constants/Constants";
const Stack = createStackNavigator();

import TabNavigator from "./src/navigation/TabNavigator";
import { Login, SignUp, Filter, FilterScreen } from "./src/screens";

export default function App() {
  //-- optionHeader
  const optionHeader = {
    headerStyle: { backgroundColor: Theme.AppColor, height: 90 },
    headerTitle: () => (
      <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
        {Theme.AppName}
      </Text>
    ),
    headerLeft: () => (
      <Text style={{ color: "white", fontSize: 25 }}>Left</Text>
    ),
    headerRight: () => (
      <Text style={{ color: "white", fontSize: 25 }}>Right</Text>
    )
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Filter" component={FilterScreen} />

        <Stack.Screen
          options={optionHeader}
          name="Home"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
