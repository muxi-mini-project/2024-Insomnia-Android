import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
   background: {
      width: '100%',
      height: '100%',
   },
   container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   image1: {
      resizeMode: 'stretch',
      width: windowWidth * 0.1,
      height: windowHeight * 0.1,
      padding: 10,
   },
   image2: {
      resizeMode: 'stretch',
      width: windowWidth * 0.1,
      height: windowHeight * 0.1,
      margin: 20,
   },
   image3: {
      resizeMode: 'stretch',
      width: windowWidth * 0.1,
      height: windowHeight * 0.1,
      padding: 10,
   },
})
export default styles
