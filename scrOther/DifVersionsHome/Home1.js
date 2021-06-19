/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

/*COMMENTS: This is almost EXACTLY like react. The main difference is the tags (View vs div) and also the function calls (onChange vs onChangeText)
If you want to compare react-native to react, look in ReactToDoReference.txt for the react code for the same todo app
*/


//Import statements
import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

//Dimensions of the screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//Home class
class Home1 extends React.Component {
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
      <View style={styles.sectionContainer}>
        <TextInput style={styles.input} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />

        <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)}>
          <Text>Add Task</Text>
        </TouchableHighlight>

        <View>
          {this.state.todos.map((todo, i) => (
            <Text style={styles.text} key={i}>{todo}</Text>
          ))}
        </View>
      </View>
    );
  }
}

//Styles
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#dddddd',
    width: 200,
    padding: 9,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#da406f',
    padding: 8,
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    color: '#000000',
  }
});

//Export
export default Home1;
