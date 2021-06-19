import { StyleSheet, Dimensions } from 'react-native';

//Phone dimensions
const { width, height } = Dimensions.get('window');

//These styles are pretty self-explanatory, especially if you havev learned CSS before
export const styles = StyleSheet.create({
  container: {
    flex: 1, //Makes it fill the whole screen instead of just the <Text> height
    justifyContent: 'center', //requires flex - center vertically
    alignItems: 'center', //requires flex - center horizontally
    backgroundColor: 'yellow', //Uses variable on line 14
    padding: 60 //No units needed - automatically density points
  },
  box: {
    backgroundColor: 'orange',
    width: width / 2,
    height: 30,
    position: 'absolute',
    top: 70,
    left: 40,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Arial',
    fontWeight: '800',
  }
});
