import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Fancy extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fancy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Makes it fill the whole screen
    backgroundColor: 'red'
  }
});

export default Fancy;
