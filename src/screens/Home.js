import React, { useContext, useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Header from "../components/FilterHeaderBar/Header";
import { GlobalFilter } from "../constants/FIltersGroups";

function Home(props) {
  const { datas } = props;
  if (!datas) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <Header filtersList={GlobalFilter.ServicesFilters} />
      <FlatList
        data={datas}
        keyExtractor={item => item.placeId}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={{
              //height: 1,
              backgroundColor: "lightgrey",
              marginBottom: 5,
              marginTop: 5,
              marginHorizontal: 25
            }}
          />
        )}
        contentContainerStyle={{
          justifyContent: "center"
        }}
        renderItem={({ item }) => (
          <View>
            <ListItem item={item} />
          </View>
        )}
      />
    </View>
  );
}

export default Home;
