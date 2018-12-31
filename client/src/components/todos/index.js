import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import modules from "../../modules";

class Todos extends Component {
  listObject = {};

  constructor(props) {
    super(props);
    this.state = {
      list: ""
    };
    props.getTodosList();
    this.listObject = props.list;
  }

  render() {
    const content =
      Object.keys(this.listObject).length === 0
        ? <Text>No list.</Text>
        : Object.entries(this.listObject).map((value, index) => <Text key={`todo_${index}`}>{ value }</Text>);
    return (
      <View style={styles.container}>
        { content }
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodosList: () => dispatch(modules.action.getTodosList())
  };
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

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
