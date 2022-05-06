
import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const initialRegion = {
  latitude: 47.189723,
  longitude: 18.416589,
  latitudeDelta: 0.1,
  longitudeDelta: 0.05
};

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={{ latitude: 47.205466, longitude: 18.398748 }} />
        <Marker coordinate={{ latitude: 47.205199, longitude: 18.399094 }} />
        <Marker coordinate={{ latitude: 47.204561, longitude: 18.399468 }} />
        <Marker coordinate={{ latitude: 47.203483, longitude: 18.398796 }} />
        <Marker coordinate={{ latitude: 47.203611, longitude: 18.399344 }} />
        <Marker coordinate={{ latitude: 47.203337, longitude: 18.399512 }} />
        <Marker coordinate={{ latitude: 47.202863, longitude: 18.398391 }} />
        <Marker coordinate={{ latitude: 47.202246, longitude: 18.398723 }} />


        <Marker coordinate={{ latitude: 47.1946006, longitude: 18.435434 }} />
        <Marker coordinate={{ latitude: 47.194051, longitude: 18.435493 }} />
        <Marker coordinate={{ latitude: 47.194445, longitude: 18.436960 }} />
        <Marker coordinate={{ latitude: 47.194085, longitude: 18.436310 }} />
        <Marker coordinate={{ latitude: 47.193884, longitude: 18.436542 }} />
        <Marker coordinate={{ latitude: 47.193742, longitude: 18.436604 }} />
        <Marker coordinate={{ latitude: 47.194037, longitude: 18.436985 }} />
        <Marker coordinate={{ latitude: 47.193590, longitude: 18.437154 }} />
        <Marker coordinate={{ latitude: 47.194081, longitude: 18.437654 }} />
        <Marker coordinate={{ latitude: 47.193873, longitude: 18.437769 }} />

        <Marker coordinate={{ latitude: 47.196251, longitude: 18.401404 }} />
        <Marker coordinate={{ latitude: 47.196631, longitude: 18.400933 }} />
        <Marker coordinate={{ latitude: 47.197407, longitude: 18.401902 }} />

        <Marker coordinate={{ latitude: 47.189959, longitude: 18.408479 }} />
        <Marker coordinate={{ latitude: 47.189669, longitude: 18.408226 }} />
        <Marker coordinate={{ latitude: 47.189356, longitude: 18.408807 }} />
        <Marker coordinate={{ latitude: 47.189579, longitude: 18.408852 }} />
        <Marker coordinate={{ latitude: 47.189225, longitude: 18.409055 }} />
        <Marker coordinate={{ latitude: 47.189350, longitude: 18.409336 }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: "100%",
    height: "100%"
  }
});