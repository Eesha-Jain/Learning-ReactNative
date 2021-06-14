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

const opacity = 0.9;
const styles = StyleSheet.create({
  container: {
    flex: 1, //Makes it fill the whole screen instead of just the <Text> height
    backgroundColor: `rgba(130, 80, 231, ${opacity})`, //Uses variable on line 14
    padding: 60 //No units needed - automatically react-native points
  }
});

export default Fancy;
