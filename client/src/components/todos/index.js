import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import modules from "../../modules";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bonjour à tous!</Text>
      </View>
    )
  }
}

export default connect(state => state)(Todos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
