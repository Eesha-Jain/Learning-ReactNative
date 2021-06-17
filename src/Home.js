/*COMMENTS: This is almost EXACTLY like react. The main difference is the tags (View vs div) and also the function calls (onChange vs onChangeText)
If you want to compare react-native to react, look in ReactToDoReference.txt for the react code for the same todo app
*/


//Import statements
import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

//Home class
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    }
  }

  handleChange(text) {
    this.setState({newTodo: text})
  }

  handlePress(e) {
    const changedList = [...this.state.todos, this.state.newTodo];
    this.setState({todos: changedList, newTodo: ""})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />

          <TouchableHighlight
            style={styles.button}
            onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View key={i} style={styles.todo}><Text style={styles.todoText}>{todo}</Text></View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    padding: 10,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    fontSize: 24,
    borderBottomWidth: 1,
    marginRight: 10,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  todos: {
    marginTop: 40,
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  todoText: {
    fontSize: 24,
  }
});

//Export
export default Home;
