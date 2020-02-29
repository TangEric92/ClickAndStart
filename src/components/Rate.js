import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Rate(props) {
  const { rate } = props;
  const displayStars = rate => {
    const stars = [];
    let i = 0;
    for (; i < rate; i++) {
      stars.push(<FontAwesome key={i} name="star" size={18} color="#FFCC00" />);
    }
    for (; i < 5; i++) {
      stars.push(<FontAwesome key={i} name="star" size={18} color="grey" />);
    }
    return stars;
  };
  return (
    <View>
      <View style={styles.rate}>
        {displayStars(rate)}
        <Text>({rate})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rate: { flexDirection: "row" }
});
