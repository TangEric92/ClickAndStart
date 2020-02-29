import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import { Theme } from "../../constants/Constants";

export default FilterBarButton = props => {
  const { code, caption, onFilterPress, counter, selected, isAll } = props;

  let myCounter = 0;
  if (isAll) {
    myCounter = counter;
  } else {
    myCounter = selected ? 1 : 0;
  }

  return (
    <>
      {myCounter > 0 && (
        <View style={styles.checkedZone}>
          <Text style={styles.checkedText}> {myCounter}</Text>
        </View>
      )}
      <GradientButton
        gradientBegin={Theme.AppColor}
        gradientEnd="#000000"
        gradientDirection="diagonal"
        style={styles.btnStyle}
        textStyle={{ fontSize: 12 }}
        height={50}
        width={"22%"}
        radius={12}
        impact
        impactStyle="Light"
        onPressAction={onFilterPress}
      >
        {caption}
      </GradientButton>
    </>
  );
};

const styles = StyleSheet.create({
  checkedZone: {
    width: 18,
    height: 18,
    left: 10,
    top: -20,
    position: "relative",
    zIndex: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 9,
    backgroundColor: Theme.AppColor
  },
  checkedText: {
    color: "white"
  },
  btnStyle: { color: "red" }
});
