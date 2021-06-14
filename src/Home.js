/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

//Import statements
import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

//Dimensions of the screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//Home class
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [1,2,3],
      newTodo: ""
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({newTodo: value})
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <TextInput style={styles.input} value={this.state.newTodo} onChange={this.handleChange.bind(this)} />
        <TouchableHighlight>
          <Text>Add Task</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
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
    width: 100,
    padding: 5,
    marginBottom: 10
  }
});

//Export
export default Home;
