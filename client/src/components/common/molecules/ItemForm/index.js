import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
// import { Input } from "../../atoms/Input";

export const ItemForm = ({ value, onPress }) => (
  <View>
    <Text># { value.item } </Text>
    <Button
      title="Delete"
      style={styles.button}
      onPress={() => onPress(value.id)}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    padding: 8,
    color: "#000",
    fontSize: 14,
    borderColor: "#000",
    borderWidth: 1
  },
  button: {
    margin: 0
  }
});