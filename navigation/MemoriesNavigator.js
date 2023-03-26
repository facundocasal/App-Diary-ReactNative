import { Platform, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapScreen from "../screens/MapScreen";
import MemoriesListScreen from "../screens/MemoriesListScreen";
import MemoryDetailScreen from "../screens/MemoryDetailScreen";
import NewMemoryScreen from "../screens/NewMemoryScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

const MemoriesStack = createNativeStackNavigator();

const MemoriesNavigator = () => (
  <MemoriesStack.Navigator
    initialRoute="Diario"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.DARK_SIENNA : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MemoriesStack.Screen
      name="Diario"
      component={MemoriesListScreen}
      options={({ navigation }) => ({
        title: `Mi Diario`,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
            <Entypo
              name="new-message"
              size={15}
              color={Platform.OS === "android" ? "wheat" : COLORS.DARK_SIENNA}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <MemoriesStack.Screen
      name="Detalle"
      component={MemoryDetailScreen}
      options={{ title: "Recuerdo" }}
    />
    <MemoriesStack.Screen
      name="Nuevo"
      component={NewMemoryScreen}
      options={{ title: "Nueva recuerdo" }}
    />
    <MemoriesStack.Screen
      name="Map"
      component={MapScreen}
      options={{ title: "Mapa" }}
    />
  </MemoriesStack.Navigator>
);

export default MemoriesNavigator;
