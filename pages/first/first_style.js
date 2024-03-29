import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  backGround: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button2: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.12,
    resizeMode: 'stretch',
  },
  button1: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.12,
    resizeMode: 'stretch',
    marginTop: windowHeight * 0.5,
  },
});

export default styles;
