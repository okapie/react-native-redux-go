import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SFCComponent = ({ value }) => (
  <View>
    <TextInput
      value={value}
      style={styles.input}
    />
  </View>
);

export const InputComponent = React.memo(SFCComponent);

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    padding: 8,
    color: "#000",
    fontSize: 14,
    borderColor: "#000",
    borderWidth: 1
  }
});
