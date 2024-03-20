import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity: 0.8,
  },
  detailBackground: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.5,
    marginTop: windowHeight * 0.25,
    marginLeft: windowWidth * 0.11,
    position: 'relative',
    borderRadius: windowWidth * 0.03,
    overflow: 'hidden',
    flex: 1,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 2,
  },
  finishButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.74,
    resizeMode: 'stretch',
    height: windowHeight * 0.15,
    position: 'absolute',
    bottom: windowHeight * -0.15, // 适当的底部偏移量
    left: windowWidth * 0.03,
  },
  title: {
    zIndex: 100,
    color: 'white',
    fontSize: 30,
    padding: 2,
    marginLeft: windowWidth * 0.04,
  },
  details: {
    zIndex: 100,
    color: 'white',
    width: windowWidth * 0.5,
    height: windowHeight * 0.3,
    fontSize: 20,
    padding: 12,
  },
});
export default styles;
