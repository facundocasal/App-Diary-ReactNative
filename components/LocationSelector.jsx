import * as Location from "expo-location";

import { Alert, Image, StyleSheet, View } from "react-native";
import { Button, Text } from '@rneui/themed';
import React, { useEffect, useState } from "react";

import COLORS from "../constants/Colors";
import MapPreview from "./MapPreview";
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const LocationSelector = props => {
  const [pickedLocation, setpickedLocation] = useState();
  const navigation = useNavigation()
  useEffect(() => {
    if(props.mapLocation){
      setpickedLocation(props.mapLocation)
      props.onLocation(props.mapLocation)
    }
  }, [props.mapLocation])
  
  const verifyPermissions = async () => {            
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la ubicacion para usar la aplicacion",
        [{ text: "ok" }]
      );
      return false;
    }
    return true;
  };
  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    setpickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  const handlePickOnMap = () =>{
    const isLocationOk = verifyPermissions();
    if(!isLocationOk) return
    navigation.navigate("Map")
  }
  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Ubicacion en proceso ... <SimpleLineIcons name="location-pin" size={24} color="black" /></Text>
      </MapPreview>
      <View style={styles.actions}>
      <Button
        title="Obtener ubicacion"
        color={COLORS.PEACH_PUFF}
        onPress={handleGetLocation}
      ></Button>
      <Button
        title="Elegir del mapa"
        color={COLORS.LIGTH_PINK}
        onPress={handlePickOnMap}
      ></Button>
      </View>
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: COLORS.BLUSH,
    borderWidth: 1,
  },
  actions: {
    justifyContent: "space-around",
    flexDirection: "row"
  }
});
