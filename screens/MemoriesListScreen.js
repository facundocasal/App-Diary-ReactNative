import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import MemoryItem from "../components/MemoryItem";
import { loadMemories } from "../store/memories.actions";
import { logOutUser } from "../store/user.actions";

const MemoriesListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userEmail = useSelector((state) => state.user.userEmail);
  const memories = useSelector((state) => state.memories.memories);
  const handleLogOut = () => {
    Alert.alert("Adios", "Vuelve cuando quieras.", [
      {
        text: "Salir",
      },
    ]);
    dispatch(logOutUser());
  };

  useEffect(() => {
    dispatch(loadMemories(userEmail));
  }, []);

  const renderItem = ({ item }) => (
    <MemoryItem
      title={item.title}
      image={item.image}
      date={item.date}
      description={item.description}
      onSelect={() => {
        navigation.navigate("Detalle", {
          memoryId: item.id,
        });
      }}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido {user} </Text>
      <Text style={styles.subTitle}>
        Puedes agregar un recuerdo en el icono de{" "}
        <Entypo name="new-message" size={15} color="black" />
      </Text>
      <FlatList
        data={memories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View>
        <Pressable onPress={handleLogOut} style={styles.logOut}>
          <View>
            <Text>Cerrar sesion</Text>
          </View>
          <View>
            <Text>
              <Entypo name="log-out" size={24} color="black" />
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  subTitle: {
    marginTop: 10,
    fontSize: 15,
    textAlign: "center",
  },
  logOut: {
    position: "absolute",
    flexDirection: "row",
    bottom: 10,
    right: 10,
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: Colors.MAROON,
    height: 50,
    width: 135,
    borderWidth: 5,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default MemoriesListScreen;
