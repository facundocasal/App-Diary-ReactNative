import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import COLORS from "../constants/Colors";
import { MaterialIcons } from '@expo/vector-icons';

const ImageSelector = ( {onImage} ) => {
  const [pickedUri, setpickedUri] = useState();
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "Ok" }]
      )
      return false;
    }
    return true;
  };
  
  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.8,
    }).catch((err) => {
      console.log( err);
    });
    setpickedUri(image.assets[0].uri);
    onImage(image.assets[0].uri);
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text>No hay imagen seleccionada <MaterialIcons name="add-a-photo" size={24} color="black" /></Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <Button
        title="Elegir foto"
        color={COLORS.LIGTH_PINK}
        onPress={handlerTakeImage}
      /> 
    </View>
  );
};

export default ImageSelector;

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
  image: {
    width: "100%",
    height: "100%",
  },
});
