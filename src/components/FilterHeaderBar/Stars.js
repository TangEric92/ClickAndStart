import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Theme } from "../../constants/Constants";

export default function Stars(props) {
  const { rate, taille, filtre, canSelect, selected } = props;
  if (!rate) return null;

  const displayStars = rate => {
    const stars = [];
    let i = 0;
    for (; i < rate; i++) {
      stars.push(
        <Entypo
          key={i}
          name="star"
          size={taille ? taille : 18}
          color="#FDCC0D"
        />
      );
    }
    for (; i < 5; i++) {
      stars.push(
        <Entypo
          key={i}
          name="star"
          size={taille ? taille : 18}
          color="silver"
        />
      );
    }
    return stars;
  };

  const styles = StyleSheet.create({
    starWrapper: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: Theme.AppColor,
      borderWidth: canSelect && selected ? 2 : 0,
      borderRadius: 5
    }
  });

  return (
    <View style={styles.starWrapper}>
      {displayStars(rate)}
      <Text>{filtre ? " et plus" : rate + " reviews"}</Text>
    </View>
  );
}
