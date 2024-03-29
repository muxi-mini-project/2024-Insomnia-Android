import { Dimensions, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  textBackground: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.21,
    alignItems: 'center',
    opacity: 0.8,
    borderRadius: 20,
    overflow: 'hidden',
  },
  topic: {
    fontSize: 26,
  },
  textcontainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 20,
  },
  text: {
    fontSize: 18,
  },
  image: {
    resizeMode: 'stretch',
    width: windowWidth * 0.06,
    height: windowHeight * 0.06,
  },
  messagescontainer: { flexDirection: 'row', paddingTop: 15 },
  counts: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default styles;
