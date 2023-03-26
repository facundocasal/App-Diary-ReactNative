import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../constants/Colors";
import MapPreview from "../components/MapPreview";
import React from "react";
import { deleteMemory } from "../store/memories.actions";

const MemoryDetailScreen = ({ navigation, route }) => {
  const { memoryId } = route.params;
  const dispatch = useDispatch ();
  const userEmail = useSelector((state) => state.user.userEmail);
  const memory = useSelector((state) =>
    state.memories.memories.find((item) => item.id === memoryId)
  );
  const handleDeleteMemorie = () =>{
    Alert.alert("Recuerdo borrado","Recuerdo borrado con exito", [{
      text: "Ok"
    }])
    dispatch(deleteMemory(memoryId , userEmail))
    navigation.navigate("Diario")
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title>{memory.title}</Card.Title>
        <Card.Title>El dia {memory.date}</Card.Title>
        <Card.Divider />
        <Card.Image style={{ padding: 0 }} source={{ uri: memory.image }} />
        <Card.Title>Recuerdo</Card.Title>
        <Text style={styles.memory}>
          {memory.description} 
        </Text>
        <Card.Title>Donde</Card.Title>
        <View style={styles.map}>
          <MapPreview
            
            location={{
              lat: memory.lat,
              lng: memory.lng,
            }}
          />
        </View>
        <View style={styles.buton}>
          <Button  color={"error"} title={"Borrar recuerdo"} onPress={handleDeleteMemorie}/>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  card: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  memory:{
     marginBottom: 10 ,
     textAlign: "center"
  },
  map:{
    maxHeight: 250,
    padding: 5
  },
  buton: {
    marginTop: 15
  }
});

export default MemoryDetailScreen;
