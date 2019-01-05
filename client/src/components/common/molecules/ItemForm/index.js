import React from "react";
import { View, StyleSheet } from "react-native";
import { InputComponent } from "../../atoms/Input";
import { ButtonComponent } from "../../atoms/Button";

export const ItemForm = ({ value, onPress }) => (
  <View style={styles.container}>
    <InputComponent value={ value.item } />
    <ButtonComponent
      title="Delete"
      onPress={() => onPress(value.id)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 8
  }
});
