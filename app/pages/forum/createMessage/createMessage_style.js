import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  topic: {
    color: 'white',
    alignItems: 'center',
    margin: 'auto',
    fontSize: 20,
  },
  text: {
    color: 'white',
    alignItems: 'center',
    margin: 'auto',
    fontSize: 24,
    width: windowWidth * 0.6,
  },
  picker: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    borderRadius: 10,
    overflow: 'hidden',
  },
  topictext: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.08,
    borderRadius: 10,
    marginTop: 14,
    overflow: 'hidden',
  },
  textinput: {
    textAlign: 'center',
    fontSize: 16,
  },
  texts: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    borderRadius: 20,
    marginTop: 14,
    overflow: 'hidden',
  },
  texting: {
    fontSize: 20,
  },
  button: {
    resizeMode: 'stretch',
    width: windowWidth * 0.35,
    height: windowHeight * 0.1,
    marginTop: 14,
  },
});
export default styles;
