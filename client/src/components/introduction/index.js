import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Introduction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This app is to study how it works with the latest RN version.</Text>
      </View>
    )
  }
}

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginRight: 16,
    marginLeft: 16,
    backgroundColor: "#fff"
  },
  text: {
    color: "#000",
    fontSize: 16
  }
});
