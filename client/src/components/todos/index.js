import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { getTodosList, postTodo } from "../../modules/todos";
import { ItemForm } from "../common/molecules/ItemForm";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {
        list: [],
        postResult: false
      },
      inputText: "",
      validation: {}
    };

    this.handlerChangeInputText = this.handlerChangeInputText.bind(this);
    this.handlerAddTodo = this.handlerAddTodo.bind(this);
    this.handlerDisplayTodoList = this.handlerDisplayTodoList.bind(this);
    this.renderTodoItems = this.renderTodoItems.bind(this);
  }

  componentDidMount = () => {
    if (this.props.todos) {
      this.props.getTodosList();
      this.setState({
        list: this.props.todos.list
      })
    }
  };

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

  handlerDisplayTodoList = async () => {
    this.props.getTodosList();
    const list = await this.props.todos.list;
    if (list.length > 0) {
      this.setState({ list })
    }
  };

  renderTodoItems = () => {
    let itemArray = [];
    Object.entries(this.state.list).map(([key, value]) => {
      itemArray.push({ key: value.item });
    });
    return itemArray;
  };

  render() {
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
        <Button
          title="Show List"
          style={styles.button}
          onPress={this.handlerDisplayTodoList}
        />
        { this.state.list && this.state.list.length > 0 ?
          <FlatList
            data={this.renderTodoItems()}
            renderItem={({item}) => <ItemForm value={item.key} />}
          /> : null
        }
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTodosList: () => dispatch(getTodosList()),
  postTodo: value => dispatch(postTodo(value))
});

const mapStateToProps = state => ({
  todos: {
    list: state.todos.list,
    postResult: state.todos.postResult
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
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
