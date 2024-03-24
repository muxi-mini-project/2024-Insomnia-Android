import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  bk: {
    width: '100%',
    height: '100%',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button1: {
    resizeMode: 'stretch',
    width: windowWidth * 0.4,
    height: windowHeight * 0.1,
    borderRadius: 15,
  },
  button2: {
    resizeMode: 'stretch',
    width: windowWidth * 0.4,
    height: windowHeight * 0.1,
    borderRadius: 15,
  },
  sumButton: {
    resizeMode: 'stretch',
    width: windowWidth * 0.2,
    height: windowHeight * 0.2,
  },
});
export default styles;
