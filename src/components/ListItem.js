import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Rate from "./Rate";

export default function RestaurantItem(props) {
  const { item } = props;
  if (!item) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.infoContainer}>
      <Image
        style={styles.image}
        style={{ width: 100, height: 100 }}
        source={{
          uri: item.thumbnail
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}> {item.name}</Text>
        <Rate rate={item.rating} />
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    marginHorizontal: 15
  },
  rightContainer: {
    position: "relative",
    width: "66%",
    margin: 5
  },
  image: {
    width: "33%"
  },
  title: {
    fontWeight: "bold"
  },
  description: {
    position: "absolute",
    bottom: 0
  }
});
