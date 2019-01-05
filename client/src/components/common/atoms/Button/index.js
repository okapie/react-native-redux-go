import React from "react";
import { View, Button, StyleSheet } from "react-native";

const SFCComponent = ({ title, onPress }) => (
  <View>
    <Button
      title={title}
      style={styles.button}
      onPress={() => onPress()}
    />
  </View>
);

export const ButtonComponent = React.memo(SFCComponent);

const styles = StyleSheet.create({
  button: {
    margin: 0
  }
});
