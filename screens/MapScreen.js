import MapView, { Marker } from "react-native-maps";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setselectedLocation] = useState();
  const initialRegionObj = {
    latitude: 37.4219023,
    longitude: -122.0839984,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const handleSelectedLocation = (event) => {
    setselectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };
  const handleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate("Nuevo", {
        mapLocation: selectedLocation,
      });
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveLocation}>
          <Ionicons name="md-save-outline" color={"white"} size={25} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSaveLocation]);
  return (
    <MapView
      initialRegion={initialRegionObj}
      onPress={handleSelectedLocation}
      style={styles.container}
    >
      {selectedLocation && (
        <Marker
          pinColor={"purple"}
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
