import { Image, StyleSheet, Text, View } from "react-native";

import { Button } from '@rneui/themed';
import KEY_AP from "../constants/map";
import React from "react";

KEY_AP.KEY_AP;
const MapPreview = ({ location, style, children }) => {
  const mapPreview = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}&key=${KEY_AP.KEY_AP}`
    : "";
  return (
    <View style={{...styles.mapPreview , ...style}}>
      {location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreview }} />
      ) : (
         children 
      )}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview:{
    justifyContent: "center",
    alignItems: "center"
  },
  mapImage :{
    width: "100%",
    height: "100%"
  }
});
