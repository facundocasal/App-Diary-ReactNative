import { StyleSheet, Text, TextInput, View, } from "react-native";

import React from "react";

const TextArea = ({setDescription, title}) => {
  return (
    <View>
        <Text>{title}</Text>
        <TextInput 
            style={styles.input}
            multiline={true}
            numberOfLines={10}
            onChangeText={(text) => setDescription(text)}
        />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
    input: {
        
        borderBottomColor: "#ccc",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
      },
});
