import React, { useContext, useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import ListItem from "../components/ListItem";
function Home(props) {
  const { datas } = props;
  if (!datas) {
    return <ActivityIndicator />;
  }
  return (
    <View>
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
