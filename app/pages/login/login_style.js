import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  username: {
    borderRadius: windowWidth * 0.02,
    color: 'white',
    borderColor: 'white',
    fontSize: 20,
    marginTop: windowHeight * 0.1,
  },
  password: {
    color: 'white',
    fontSize: 20,
    marginTop: windowHeight * 0.01,
  },
  ClickSign: {
    color: 'white',
  },
  img: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.3,
    resizeMode: 'stretch',
  },
});

export default styles;
