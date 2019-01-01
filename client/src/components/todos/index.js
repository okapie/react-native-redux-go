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
      inputText: "",
      validation: {}
    };
    props.getTodosList();
    this.listObject = props.list;
  }

  handlerChangeInputText = inputText => {
    this.setState({inputText})
  };

  handlerAddTodo = () => {
    this.setState({
      validation: {
        inputText: ""
      }
    });
    if (this.state.inputText === "") {
      this.setState({
        validation: {
          inputText: "Enter your schedule."
        }
      });
      return;
    }
    this.props.postTodo(this.state.inputText);
  };

  render() {
    const content =
      Object.keys(this.listObject).length === 0
        ? <Text>No list.</Text>
        : Object.entries(this.listObject).map(([key, value], index) => <Text key={`todo_${index}`}>{ value }</Text>);
    const validation =
      Object.keys(this.state.validation).length === 0
        ? null
        : Object.entries(this.state.validation).map(
          ([key, value], index) => <Text key={`validation_${index}`} style={styles.validation}>{ value }</Text>
          );
    return (
      <View style={styles.container}>
        { validation }
        <TextInput
          value={this.state.inputText}
          onChangeText={this.handlerChangeInputText}
          style={styles.input}
        />
        <Button
          title="Add"
          style={styles.button}
          onPress={this.handlerAddTodo}
        />
        { content }
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodosList: () => dispatch(modules.action.getTodosList()),
    postTodo: value => dispatch(modules.action.postTodo(value))
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
  },
  validation: {
    color: "#ff0000"
  }
});
