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
    paddingTop: '16%',
  },
  button1: {
    resizeMode: 'stretch',
    width: windowWidth * 0.42,
    height: windowHeight * 0.08,
    borderRadius: 15,
  },
  button2: {
    resizeMode: 'stretch',
    width: windowWidth * 0.42,
    height: windowHeight * 0.08,
    borderRadius: 15,
  },
  sumButton: {
    resizeMode: 'stretch',
    width: windowWidth * 0.18,
    height: windowHeight * 0.1,
    marginLeft: windowHeight * 0.32,
  },
});
export default styles;
