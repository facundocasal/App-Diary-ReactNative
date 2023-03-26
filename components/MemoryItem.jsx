import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import COLORS from "../constants/Colors";
import React from "react";
import { Text } from "@rneui/themed";

const MemoryItem = ({ title, date, image, description, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.memoryItem}>
      <Image style={styles.image} source={ { uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}> Fecha : {date}</Text>
        <Text style={styles.description}>{description.slice(0, 10)}...</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MemoryItem;

const styles = StyleSheet.create({
  memoryItem: {
    borderBottomColor: "#ccc",
    paddingVertical: 16,
    borderBottomWidth: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    boderRadius: 100,
    backgroundColor: COLORS.PEACH_PUFF,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: COLORS.BLUSH,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: "#777",
    fontSize: 17,
  },
});
