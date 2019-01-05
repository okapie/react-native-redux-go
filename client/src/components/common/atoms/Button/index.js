import React from "react";
import { View, Button, StyleSheet } from "react-native";

const SFCComponent = ({ title, onPress }) => (
  <View>
    <Button
      title={title}
      onPress={() => onPress()}
    />
  </View>
);

export const ButtonComponent = React.memo(SFCComponent);
