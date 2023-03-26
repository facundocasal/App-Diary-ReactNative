import { Button, Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import ModalSingUp from "../components/ModalSingUp";

const HomeScreen = () => {
  const [isVisibility, setIsVisibility] = useState(false);
  const handleConfirm = () => {
    setIsVisibility(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Bienvenido a tu Diario amigo !!</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={handleConfirm}>
          <Text style={styles.butonText}>INICIAR</Text>
      </TouchableOpacity>
      <ModalSingUp
        setVisibility={setIsVisibility}
        isVisibility={isVisibility}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.MAROON,
  },
  button: {
    width: 150,
    maxWidth: 300,
    maxHeight: 200,
    height: 150,
    
    borderRadius: 200,
    shadowColor: "#fff",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 100,
    backgroundColor: Colors.LIGTH_PINK,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    
  },
  butonText:{
    fontSize: 30,
    color: "#fff",
  },
  title: {
      color: "#fff",
      fontSize : 20,
      marginBottom: 30,
  }
});
