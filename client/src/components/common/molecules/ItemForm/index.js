import React from "react";
import {View, Button, StyleSheet, Text, TextInput} from "react-native";
// import { Input } from "../../atoms/Input";

export const ItemForm = ({ value }) => (
  <View>
    <Text># { value } </Text>
    <Button
      title="Delete"
      style={styles.button}
      onPress={() => {}}
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