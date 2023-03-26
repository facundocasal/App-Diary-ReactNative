import { Alert, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../constants/Colors";
import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";
import TextArea from "../components/TextArea";
import { addMemories } from "../store/memories.actions";

const NewMemoryScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [description, setdescription] = useState("");
  const [error, seterror] = useState(null);
  const userEmail = useSelector(state => state.user.userEmail)
  const handleTitleChange = (text) => setTitle(text);
  const handleSave = () => {
    if (title != "" && location != "" && description != "") {
      console.log("estoy en new " , userEmail)
      dispatch(addMemories(userEmail,title, description, image, location));
      seterror(false)
      navigation.navigate("Diario");
    } else {
      seterror(true);
      Alert.alert(
        "Campos vacios",
        "Los campos titulo , ubicacion y recuerdo no deben estar vacios",
        [
          {
            text: "Volver",
          },
        ]
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <Text style={styles.error}>
          {error && title === "" && "Campo de titulo Vacio"}
        </Text>
        <Input style={styles.input} onChangeText={handleTitleChange} />
        <Text style={styles.error}>
          {error && description === "" && "Campo de recuerdo Vacio"}
        </Text>
        <TextArea title="Recuerdo" setDescription={setdescription} />
        <Text style={styles.label}>Seleccion una foto para agregar a tu recuerdo</Text>
        <ImageSelector onImage={setImage} />
        <Text style={styles.label}>Seleccion la ubicacion de tu recuerdo</Text>
        <Text style={styles.error}>
          {error && location === "" && "Campo de ubicacion Vacio"}
        </Text>
        <LocationSelector
          onLocation={setLocation}
          mapLocation={route?.params?.mapLocation}
        />

        <Button
          onPress={handleSave}
          title="Guardar direccion"
          color={Colors.MAROON}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  error:{
    color : "red",
    fontSize : 15,
    fontWeight : "bold"
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderRadius: 5,    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewMemoryScreen;
