import React from "react";
import { View, StyleSheet } from "react-native";
import { InputComponent } from "../../atoms/Input";
import { ButtonComponent } from "../../atoms/Button";

export const ItemForm = ({ value, onPress }) => (
  <View style={styles.container}>
    <InputComponent value={ value.item } />
    <ButtonComponent
      title="Delete"
      style={styles.button}
      onPress={() => onPress(value.id)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 8
  },
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