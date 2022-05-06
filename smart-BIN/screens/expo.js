
import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Linking } from "react-native";
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
  },
  name:{
    fontSize:24,
    alignSelf:'center',
    margin: 10,
    color:"#3399ff",
    fontWeight:'bold',
    
  },
});