import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {styles} from './styles';

//You can use `` to incorporate variables into strings (like normal :))
const opacity = 0.9;

//You can pass in an array of styles where the later in the array override the earlier ones
class Fancy extends React.Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: `rgba(130, 80, 231, ${opacity})`}]}>
        <View style={styles.box}>
        </View>
        <Text style={styles.text}>Fancy</Text>
      </View>
    );
  }
}

export default Fancy;
