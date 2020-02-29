import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";

import MapView, { Marker } from "react-native-maps";

export default function ItemDetail(props) {
  const detail = props.route.params.item;

  if (!detail) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text>{detail.name}</Text>
      <MapView
        style={{ flex: 1, height: 250, width: "100%" }}
        initialRegion={{
          latitude: detail.location.lat,
          longitude: detail.location.lng,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        showsUserLocation={true}
      >
        <Marker
          key={detail.placeId}
          coordinate={{
            latitude: detail.location.lat,
            longitude: detail.location.lng
          }}
        />
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
