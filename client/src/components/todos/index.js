import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import modules from "../../modules";

class Todos extends Component {
  listObject = {};

  constructor(props) {
    super(props);
    this.state = {
      list: "",
      inputText: ""
    };
    props.getTodosList();
    this.listObject = props.list;
  }

  handlerChangeInputText = inputText => {
    this.setState({inputText})
  };

  render() {
    const content =
      Object.keys(this.listObject).length === 0
        ? <Text>No list.</Text>
        : Object.entries(this.listObject).map((value, index) => <Text key={`todo_${index}`}>{ value }</Text>);
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.inputText}
          onChangeText={this.handlerChangeInputText}
          style={styles.input}
        />
        <Button
          title="Add"
          style={styles.button}
          onPress={() => console.log("Pressed")}
        />
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
  },
  button: {
    margin: 0
  },
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
